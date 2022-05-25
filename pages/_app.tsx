import "../styles/globals.css"
import type { AppProps } from "next/app"
import { createContext, FC, useState } from "react"
import Avvvatars from "avvvatars-react"
import SidebarItem from "../components/sidebarItem"
import { DispatchSelectedScreen, SidebarScreen } from "../typings/sidebar"

export const SelectedScreenContext =
  createContext<null | DispatchSelectedScreen>(null)

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [selectedScreen, setSelectedScreen] = useState<SidebarScreen>("INBOX")

  return (
    <div className="flex min-h-screen w-full flex-col font-ubuntu">
      <header className="fixed top-0 left-0 right-0 flex flex-col items-center justify-center bg-blue-600 text-white">
        <div className="flex w-full max-w-7xl flex-row items-center justify-between p-4">
          <div className="flex flex-row items-center">
            <div className="cursor-pointer">
              <p className="text-2xl">Seonghun Cho</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="cursor-pointer">
              <Avvvatars size={40} value="Seonghun Cho" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full max-w-7xl flex-row self-center pt-16">
        <div className="flex w-1/6 flex-col items-start space-y-3 py-8 pl-3 pr-2 sm:w-[28%] md:w-[23%] md:pl-3.5 md:pr-3 lg:w-1/5 xl:w-1/6">
          <SidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            }
            href="/"
            selected={selectedScreen === "INBOX"}
            title="Inbox"
          />
          <SidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            }
            href="/outbox"
            selected={selectedScreen === "OUTBOX"}
            title="Outbox"
          />
          <SidebarItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            }
            href="/project"
            selected={selectedScreen === "PROJECT"}
            title="Project"
          />
        </div>
        <SelectedScreenContext.Provider value={setSelectedScreen}>
          <Component {...pageProps} />
        </SelectedScreenContext.Provider>
      </main>
    </div>
  )
}

export default App
