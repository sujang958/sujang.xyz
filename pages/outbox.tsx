import { NextPage } from "next"
import Lottie from "react-lottie"
import { useContext, useEffect } from "react"
import { SelectedScreenContext } from "./_app"
import { DispatchSelectedScreen } from "../typings/sidebar"
import { motion } from "framer-motion"
import MailContainer from "../components/mailContainer"

const OutboxPage: NextPage = () => {
  const setScreen = useContext(SelectedScreenContext) as DispatchSelectedScreen

  useEffect(() => {
    setScreen("OUTBOX")
  }, [])

  return (
    <MailContainer>
      <div className="-mt-16 flex h-full w-full flex-col items-center justify-center">
        <Lottie
          options={{
            autoplay: true,
            animationData: require("../public/lotties/MailLoadingAnimation.json"),
            loop: true,
          }}
        />
        <motion.p
          className="absolute text-xl"
          initial={{ opacity: 0, top: "61%" }}
          animate={{ opacity: 1, top: "60%" }}
          transition={{ delay: 1, duration: 1 }}
        >
          Umm... There{"'"}s nothing!
        </motion.p>
      </div>
    </MailContainer>
  )
}

export default OutboxPage
