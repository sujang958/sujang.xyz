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
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default App
