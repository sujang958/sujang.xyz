import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FC, useEffect, useState } from "react"
import Lottie from "lottie-react"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [windowNull, setWindowNull] = useState<
    null | (Window & typeof globalThis)
  >(null)

  useEffect(() => {
    setWindowNull(window ?? null)
  }, [])

  if (windowNull === null)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
        <Lottie
          animationData={require("../public/lotties/activityIndicator.json")}
          loop={true}
        />
      </div>
    )

  return (
    <div className="min-h-screen w-full bg-pseudo-black font-pretendard text-white">
      <Component {...pageProps} />
      <p className="text-base">Copyrights Sujang, all rights reserved</p>
    </div>
  )
}

export default App
