import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FC } from "react"
import Avvvatars from "avvvatars-react"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen w-full font-ubuntu">
      <header className="fixed top-0 left-0 right-0 bg-blue-600 p-4 text-white">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="cursor-pointer">
              <p className="text-2xl">Seonghun Cho</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-evenly space-x-4">
            <div className="cursor-pointer">
              <Avvvatars size={40} value="Seonghun Cho" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full flex-row pt-16">
        <div className="flex w-1/4 flex-col items-start py-8">
          <div className="flex w-full cursor-pointer flex-row items-center space-x-3 py-3 pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-xl">Inbox</p>
          </div>
        </div>
        <div className="pr-2 flex w-1/3 flex-col items-start py-8 rounded-r-xl">
          <div className="flex cursor-pointer flex-col py-3 pl-6">
            <div className="flex w-full flex-row items-center space-x-3 py-1">
              <Avvvatars size={50} value="Seonghun Cho" />
              <div className="flex flex-col">
                <p className="text-xl">Seonghun Cho</p>
                <p className="text-base leading-tight">
                  {new Date().toISOString()}
                </p>
              </div>
            </div>
            <div className="flex flex-col py-1.5 px-1.5">
              <p className="text-lg leading-tight text-gray-700">
                hello there!, this is my introduce!. The concept is a mail
                website.
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer flex-col py-3 pl-6">
            <div className="flex w-full flex-row items-center space-x-3 py-1">
              <Avvvatars size={50} value="Seonghun Cho" />
              <div className="flex flex-col">
                <p className="text-xl">Seonghun Cho</p>
                <p className="text-base leading-tight">
                  {new Date().toISOString()}
                </p>
              </div>
            </div>
            <div className="flex flex-col py-1.5 px-1.5">
              <p className="text-lg leading-tight text-gray-700">
                This is my contact. If you have some questions, then you can ask
                me.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
