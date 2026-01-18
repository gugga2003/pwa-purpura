"use client";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface Message {
    id: string;
    text: string;
    sender: "me" | "other";
    time: string;
    user?: string;
}

export default function ChatPage() {
    const router = useRouter();
    const user = useAppStore((state) => state.user);
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Hola equipo, ¿cómo va el relevamiento en Zona Norte?", sender: "other", user: "Coordinador", time: "09:30" },
        { id: "2", text: "Todo en orden, ya cargamos las primeras 50 encuestas.", sender: "me", time: "09:32" },
        { id: "3", text: "Excelente. Recuerden sincronizar antes del mediodía.", sender: "other", user: "Coordinador", time: "09:33" },
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: "me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, newMessage]);
        setInputText("");

        // Simulate reply
        setTimeout(() => {
            const reply: Message = {
                id: (Date.now() + 1).toString(),
                text: "Recibido. Gracias por el reporte.",
                sender: "other",
                user: "Bot",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, reply]);
        }, 2000);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark h-screen flex flex-col text-[#171216] dark:text-white pb-[72px]">
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-3 flex items-center gap-3">
                <button onClick={() => router.back()} className="text-primary p-1">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    G
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-sm leading-tight">Grupo Operativo {user?.territory || "General"}</h2>
                    <p className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                        <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        3 en línea
                    </p>
                </div>
                <button className="text-gray-400 p-2">
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                        {msg.sender === 'other' && <span className="text-[10px] text-gray-500 ml-1 mb-0.5">{msg.user}</span>}
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${msg.sender === 'me'
                                ? 'bg-primary text-white rounded-tr-none'
                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-700'
                            }`}>
                            {msg.text}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 mx-1">{msg.time}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </main>

            <div className="p-3 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
                <form onSubmit={handleSend} className="flex gap-2 items-end">
                    <button type="button" className="p-3 text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                    </button>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 min-h-[44px] flex items-center">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Escribe un mensaje..."
                            className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm max-h-20"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className="p-3 bg-primary text-white rounded-full shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100"
                    >
                        <span className="material-symbols-outlined text-xl">send</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
