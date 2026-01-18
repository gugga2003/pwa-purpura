import Link from "next/link";
import TeamBottomNav from "@/components/layout/TeamBottomNav";

export default function TeamPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark antialiased transition-colors duration-200 min-h-screen flex flex-col">
      <div className="h-12 w-full bg-background-light dark:bg-background-dark sticky top-0 z-50 flex items-center justify-between px-6 pt-2">
        <span className="text-xs font-semibold text-text-light dark:text-text-dark">9:41</span>
        <div className="flex items-center gap-1">
          <span className="material-icons-round text-sm">signal_cellular_alt</span>
          <span className="material-icons-round text-sm">wifi</span>
          <span className="material-icons-round text-sm">battery_full</span>
        </div>
      </div>
      <header className="px-5 pt-2 pb-4 flex items-center justify-between sticky top-12 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-primary dark:text-white">Team</h1>
          <p className="text-xs text-subtext-light dark:text-subtext-dark mt-0.5">
            Admin &amp; Field Operations
          </p>
        </div>
        <Link
          href="/team/invite"
          className="bg-primary text-white p-2 rounded-full shadow-lg hover:bg-secondary active:scale-95 transition-all"
          aria-label="Add team member"
        >
          <span className="material-icons-round text-xl">person_add</span>
        </Link>
      </header>
      <div className="px-5 mt-4 mb-6">
        <div className="relative">
          <input
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card-light dark:bg-card-dark border-none shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] text-sm text-text-light dark:text-text-dark placeholder-subtext-light dark:placeholder-subtext-dark focus:ring-2 focus:ring-primary/50"
            placeholder="Search team members..."
            type="text"
          />
          <span className="material-icons-round absolute left-3 top-3 text-subtext-light dark:text-subtext-dark">
            search
          </span>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 no-scrollbar">
          <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shadow-md whitespace-nowrap">
            All Users
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white dark:bg-card-dark text-subtext-light dark:text-subtext-dark text-xs font-medium shadow-sm border border-gray-100 dark:border-gray-700 whitespace-nowrap">
            Field Agents
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white dark:bg-card-dark text-subtext-light dark:text-subtext-dark text-xs font-medium shadow-sm border border-gray-100 dark:border-gray-700 whitespace-nowrap">
            Admins
          </button>
          <button className="px-4 py-1.5 rounded-full bg-white dark:bg-card-dark text-subtext-light dark:text-subtext-dark text-xs font-medium shadow-sm border border-gray-100 dark:border-gray-700 whitespace-nowrap">
            Inactive
          </button>
        </div>
      </div>
      <main className="px-5 pb-24 space-y-4">
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsex1fjy_qWkj-evRxe55n0I7aGu936O8VTe44Hjcc-J5kV75TC7bvERqTGYd3RX86pZyyXiatcmoWqvAaiU7a7OiX83xF3uPrRh6nM8BQQBggwEKVzQIw2iJYpWyonPdk3-6EWA4GivgkO0p1YwrNRXjTE1iElv33u4Nez-K1cjA7LM0_OmMTO9N_EJ6tCScIg40xvpuH6w-S14n_x5NT8Wm99R_GqRpxVDpOyq5vHH6-V9TgryI8MwTmQGsT4uG7Sh3wIaJGJO8"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
              <div>
                <h3 className="font-bold text-text-light dark:text-white">Mateo Ramirez</h3>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">ID: #OP-4421</p>
              </div>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                defaultChecked
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary focus:ring-0 transition-all duration-300"
                id="toggle1"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-colors duration-300"
                htmlFor="toggle1"
              ></label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Role
              </p>
              <div className="flex items-center gap-1 text-primary font-medium text-sm">
                <span className="material-icons-round text-sm">admin_panel_settings</span>
                Regional Admin
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Territory
              </p>
              <div className="flex items-center gap-1 text-text-light dark:text-gray-200 font-medium text-sm">
                <span className="material-icons-round text-sm text-gray-400">map</span>
                North Zone
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <Link href="/audits/logs" className="flex-1 py-2 text-xs font-medium text-subtext-light dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition">
              View Logs</Link>
            <Link href="/team/users/edit" className="flex-1 py-2 text-xs font-medium text-primary bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition">
              Edit Role</Link>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-u_qMSm1CEjTsTH9AP2GM9LTCd1VXC260s8sVwEdb4lIMAkETZYxJQMT4lxxRTKc9Kh_gDs2XK4XHjag09SPfOQtReSdM-iy53a5ayBrr9udxINJSod-Dgo075EsSs2PgvmUJzoWl2ipcKZSalt3SG46i71IyHs1-6LAHOakiB_xjL6jb35D5mMED5YYXC6Fma7D7f4zjkPlynQwJusDjXrEfbfPJP87Qr3nNinSLuT0s6GQGGF4105ReHet0Oej_eQ0JSQKTvpc"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
              <div>
                <h3 className="font-bold text-text-light dark:text-white">Sofia Lopez</h3>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">ID: #OP-4422</p>
              </div>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                defaultChecked
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary focus:ring-0 transition-all duration-300"
                id="toggle2"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-colors duration-300"
                htmlFor="toggle2"
              ></label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Role
              </p>
              <div className="flex items-center gap-1 text-secondary font-medium text-sm">
                <span className="material-icons-round text-sm">agriculture</span>
                Field Officer
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Territory
              </p>
              <div className="flex items-center gap-1 text-text-light dark:text-gray-200 font-medium text-sm">
                <span className="material-icons-round text-sm text-gray-400">map</span>
                West Valley
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <Link href="/audits/logs" className="flex-1 py-2 text-xs font-medium text-subtext-light dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition">
              View Logs</Link>
            <Link href="/team/users/edit" className="flex-1 py-2 text-xs font-medium text-primary bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition">
              Edit Role</Link>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700 flex flex-col gap-3 opacity-75">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative grayscale">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ql5lPy40G1BzcEhHJXpvOgrFd9CR5tXfMNFvrFnb2_UXYWWYD8z7jQdO5kIHkEgOH1jFJfvIQuDYR6rukKtq4u80W4z4bnJMv8vvDl8kFpR3NQoY6m2Cu7jbZYwZMNBeE2_zAcBpSfnXHSpCj_vw-MwjwfJqr6K8gh1Zpsd4GY1Rkn-lpDsnSBa-cIM8t6pwU3vQJyCayC2jo2gxj9dpBBiSb3g3KaLsIfRL9dZ3T3-DZdEF1gm1w3v2oalW8K0NI_m0biOwI9w"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-500 dark:text-gray-400">Carlos Vega</h3>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">ID: #OP-4428</p>
              </div>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary focus:ring-0 transition-all duration-300"
                id="toggle3"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-colors duration-300"
                htmlFor="toggle3"
              ></label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Role
              </p>
              <div className="flex items-center gap-1 text-gray-500 font-medium text-sm">
                <span className="material-icons-round text-sm">engineering</span>
                Technician
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Territory
              </p>
              <div className="flex items-center gap-1 text-gray-500 font-medium text-sm">
                <span className="material-icons-round text-sm text-gray-400">map</span>
                East District
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <Link href="/audits/logs" className="flex-1 py-2 text-xs font-medium text-subtext-light dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition">
              View Logs</Link>
            <Link href="/team/users/edit" className="flex-1 py-2 text-xs font-medium text-primary bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition">
              Edit Role</Link>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-gray-700 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD90BEcUyCU-Wdws1K-wbCaH9ZqgmlzVoTJzD7s33dZ75m0OUzbCNLCVV2c9TTa38QzokoZHc96GQ4oi6aqZgB6C3D3YdvWpFCSY8Ub_WVaHDUukboJmD33G-jEkCUWzTupreuO_5cFzTEsSHryeZSBANXXKCKl1VnOA9dJ5Ux4-GHU6Cjj4CB6sWdiEjYqJwOwsU-PdTQJxUiV0HMaWQ4-lOucTB8O5d5BwwacErz_uhRWtB1qcQsGjofYXrfl4FwcBf-0q_F2hTk"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
              <div>
                <h3 className="font-bold text-text-light dark:text-white">Elena Cruz</h3>
                <p className="text-xs text-subtext-light dark:text-subtext-dark">ID: #OP-4430</p>
              </div>
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                defaultChecked
                className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary focus:ring-0 transition-all duration-300"
                id="toggle4"
                name="toggle"
                type="checkbox"
              />
              <label
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer transition-colors duration-300"
                htmlFor="toggle4"
              ></label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Role
              </p>
              <div className="flex items-center gap-1 text-secondary font-medium text-sm">
                <span className="material-icons-round text-sm">agriculture</span>
                Field Officer
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
              <p className="text-[10px] uppercase tracking-wider text-subtext-light dark:text-subtext-dark font-semibold mb-0.5">
                Territory
              </p>
              <div className="flex items-center gap-1 text-text-light dark:text-gray-200 font-medium text-sm">
                <span className="material-icons-round text-sm text-gray-400">map</span>
                South Hills
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-1">
            <Link href="/audits/logs" className="flex-1 py-2 text-xs font-medium text-subtext-light dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition">
              View Logs</Link>
            <Link href="/team/users/edit" className="flex-1 py-2 text-xs font-medium text-primary bg-primary/10 dark:bg-primary/20 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition">
              Edit Role</Link>
          </div>
        </div>
      </main>
      <TeamBottomNav active="team" />
    </div>
  );
}

