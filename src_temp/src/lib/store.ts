"use client";

import { useSyncExternalStore } from "react";
import {
  mockAlerts,
  mockDrafts,
  mockIncidents,
  mockInvites,
  mockKpis,
  mockNews,
  mockOfflineQueue,
  mockReports,
  mockSurveys,
  mockTasks,
  mockUser,
  mockUsers,
  type MockAlert,
  type MockDraft,
  type MockIncident,
  type MockInvite,
  type MockKpis,
  type MockNews,
  type MockOfflineItem,
  type MockReport,
  type MockSurvey,
  type MockTask,
  type MockUser,
  type MockUserEntry,
} from "./mocks";

export type Session = {
  user: MockUser;
  token: string;
};

export type AppState = {
  session: Session | null;
  tasks: MockTask[];
  incidents: MockIncident[];
  alerts: MockAlert[];
  drafts: MockDraft[];
  surveys: MockSurvey[];
  offlineQueue: MockOfflineItem[];
  news: MockNews[];
  reports: MockReport[];
  users: MockUserEntry[];
  invites: MockInvite[];
  kpis: MockKpis;
  hydrated: boolean;
  bootstrapped: boolean;
  hadStoredState: boolean;
};

const STORAGE_KEY = "pwa-purpura-store";

const defaultState: AppState = {
  session: null,
  tasks: mockTasks,
  incidents: mockIncidents,
  alerts: mockAlerts,
  drafts: mockDrafts,
  surveys: mockSurveys,
  offlineQueue: mockOfflineQueue,
  news: mockNews,
  reports: mockReports,
  users: mockUsers,
  invites: mockInvites,
  kpis: mockKpis,
  hydrated: false,
  bootstrapped: false,
  hadStoredState: false,
};

let state: AppState = defaultState;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist(nextState: AppState) {
  if (typeof window === "undefined") return;
  const { hydrated, bootstrapped, hadStoredState, ...payload } = nextState;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function computeKpis(nextState: AppState): MockKpis {
  const pendingTasks = nextState.tasks.filter((task) => task.status !== "done").length;
  const activeAlerts = nextState.alerts.filter((alert) => !alert.read).length;
  return {
    ...nextState.kpis,
    pendingTasks,
    activeAlerts,
    incidents: nextState.incidents.length,
  };
}

function setState(next: Partial<AppState> | ((prev: AppState) => AppState)) {
  const nextState = typeof next === "function" ? next(state) : { ...state, ...next };
  nextState.kpis = computeKpis(nextState);
  state = nextState;
  persist(state);
  emit();
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function hydrate() {
  if (state.hydrated) return;
  if (typeof window === "undefined") return;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const data = JSON.parse(raw) as Partial<AppState>;
      state = {
        ...state,
        ...data,
        hydrated: true,
        hadStoredState: true,
      };
    } catch {
      state = { ...state, hydrated: true };
    }
  } else {
    state = { ...state, hydrated: true };
    persist(state);
  }
  emit();
}

async function bootstrap() {
  if (state.bootstrapped) return;
  if (typeof window === "undefined") return;

  try {
    const [
      me,
      kpis,
      tasks,
      incidents,
      alerts,
      drafts,
      surveys,
      news,
      reports,
      users,
      invites,
      queue,
    ] = await Promise.all([
      fetch("/api/me").then((res) => res.json()),
      fetch("/api/kpis").then((res) => res.json()),
      fetch("/api/tasks").then((res) => res.json()),
      fetch("/api/incidents").then((res) => res.json()),
      fetch("/api/alerts").then((res) => res.json()),
      fetch("/api/drafts").then((res) => res.json()),
      fetch("/api/surveys").then((res) => res.json()),
      fetch("/api/news").then((res) => res.json()),
      fetch("/api/reports").then((res) => res.json()),
      fetch("/api/users").then((res) => res.json()),
      fetch("/api/invites").then((res) => res.json()),
      fetch("/api/offline-queue").then((res) => res.json()),
    ]);

    setState((prev) => {
      const shouldSeed = !prev.hadStoredState;
      return {
        ...prev,
        session: prev.session ?? { user: me, token: "mock-token" },
        tasks: shouldSeed ? tasks : prev.tasks,
        incidents: shouldSeed ? incidents : prev.incidents,
        alerts: shouldSeed ? alerts : prev.alerts,
        drafts: shouldSeed ? drafts : prev.drafts,
        surveys: shouldSeed ? surveys : prev.surveys,
        news: shouldSeed ? news : prev.news,
        reports: shouldSeed ? reports : prev.reports,
        users: shouldSeed ? users : prev.users,
        invites: shouldSeed ? invites : prev.invites,
        offlineQueue: shouldSeed ? queue : prev.offlineQueue,
        kpis: shouldSeed ? kpis : prev.kpis,
        bootstrapped: true,
      };
    });
  } catch {
    setState({ bootstrapped: true });
  }
}

export const appStore = {
  getState: () => state,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  hydrate,
  bootstrap,
  setSession: (session: Session) => setState({ session }),
  clearSession: () => setState({ session: null }),
  addTask: (task: Omit<MockTask, "id">) =>
    setState((prev) => ({
      ...prev,
      tasks: [{ ...task, id: makeId("task") }, ...prev.tasks],
    })),
  updateTaskStatus: (id: string, status: MockTask["status"]) =>
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    })),
  addIncident: (incident: Omit<MockIncident, "id" | "createdAt">) =>
    setState((prev) => ({
      ...prev,
      incidents: [
        {
          ...incident,
          id: makeId("INC"),
          createdAt: new Date().toISOString(),
        },
        ...prev.incidents,
      ],
    })),
  addDraft: (draft: Omit<MockDraft, "id" | "updatedAt">) =>
    setState((prev) => ({
      ...prev,
      drafts: [
        {
          ...draft,
          id: makeId("draft"),
          updatedAt: new Date().toISOString(),
        },
        ...prev.drafts,
      ],
    })),
  updateDraft: (id: string, content: string) =>
    setState((prev) => ({
      ...prev,
      drafts: prev.drafts.map((draft) =>
        draft.id === id
          ? { ...draft, content, updatedAt: new Date().toISOString() }
          : draft
      ),
    })),
  addSurvey: (survey: Omit<MockSurvey, "id" | "updatedAt" | "responses">) =>
    setState((prev) => ({
      ...prev,
      surveys: [
        {
          ...survey,
          id: makeId("survey"),
          updatedAt: new Date().toISOString(),
          responses: 0,
        },
        ...prev.surveys,
      ],
    })),
  addNews: (item: Omit<MockNews, "id" | "createdAt">) =>
    setState((prev) => ({
      ...prev,
      news: [
        {
          ...item,
          id: makeId("news"),
          createdAt: new Date().toISOString(),
        },
        ...prev.news,
      ],
    })),
  addReport: (report: Omit<MockReport, "id" | "createdAt">) =>
    setState((prev) => ({
      ...prev,
      reports: [
        {
          ...report,
          id: makeId("report"),
          createdAt: new Date().toISOString(),
        },
        ...prev.reports,
      ],
    })),
  addUser: (user: Omit<MockUserEntry, "id">) =>
    setState((prev) => ({
      ...prev,
      users: [{ ...user, id: makeId("user") }, ...prev.users],
    })),
  addInvite: (invite: Omit<MockInvite, "id" | "sentAt">) =>
    setState((prev) => ({
      ...prev,
      invites: [
        {
          ...invite,
          id: makeId("invite"),
          sentAt: new Date().toISOString(),
        },
        ...prev.invites,
      ],
    })),
  markAlertRead: (id: string) =>
    setState((prev) => ({
      ...prev,
      alerts: prev.alerts.map((alert) => (alert.id === id ? { ...alert, read: true } : alert)),
    })),
  enqueueOffline: (item: Omit<MockOfflineItem, "id" | "createdAt" | "status">) =>
    setState((prev) => ({
      ...prev,
      offlineQueue: [
        {
          ...item,
          id: makeId("offline"),
          createdAt: new Date().toISOString(),
          status: "pending",
        },
        ...prev.offlineQueue,
      ],
    })),
  syncOfflineQueue: () => {
    const pending = state.offlineQueue.filter((item) => item.status === "pending");
    if (!pending.length) return;
    setState((prev) => ({
      ...prev,
      offlineQueue: prev.offlineQueue.map((item) =>
        item.status === "pending" ? { ...item, status: "syncing" } : item
      ),
    }));

    window.setTimeout(() => {
      setState((prev) => ({
        ...prev,
        offlineQueue: prev.offlineQueue.map((item) =>
          item.status === "syncing" ? { ...item, status: "synced" } : item
        ),
      }));
    }, 1200);
  },
};

export function useAppStore<T>(selector: (state: AppState) => T) {
  return useSyncExternalStore(appStore.subscribe, () => selector(state), () => selector(state));
}

export function useHydrateStore() {
  if (typeof window !== "undefined" && !state.hydrated) {
    hydrate();
  }
}

export function getMockSession(): Session {
  return {
    user: mockUser,
    token: "mock-token",
  };
}
