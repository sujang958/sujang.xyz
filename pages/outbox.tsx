import { NextPage } from "next"
import Lottie from "react-lottie"
import { useContext, useEffect } from "react"
import { SelectedScreenContext } from "./_app"
import { DispatchSelectedScreen } from "../typings/sidebar"

const OutboxPage: NextPage = () => {
  const setScreen = useContext(SelectedScreenContext) as DispatchSelectedScreen

  useEffect(() => {
    setScreen("OUTBOX")
  }, [])

  return (
    <div className="flex w-3/4 flex-col items-start rounded-r-xl py-8 pr-2">
      <div className="-mt-12 self-center justify-self-center">
        <Lottie
          options={{
            autoplay: true,
            animationData: require("../public/lotties/MailLoadingAnimation.json"),
            loop: true,
          }}
        />
      </div>
    </div>
  )
}

export default OutboxPage
