import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FC } from "react"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen w-full font-pretendard">
      <Component {...pageProps} />
    </div>
  )
}

export default App
