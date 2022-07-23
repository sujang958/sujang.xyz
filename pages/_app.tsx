import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FC } from "react"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen w-full bg-[#111] font-pretendard text-white">
      <Component {...pageProps} />
    </div>
  )
}

export default App
