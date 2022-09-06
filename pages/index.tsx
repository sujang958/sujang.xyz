import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { GetServerSideProps, NextPage } from "next"
import { useEffect, useId } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import IMG_PROJECT1_1 from "../public/imgs/project1-1.png"
import IMG_PROJECT1_2 from "../public/imgs/project1-2.png"
import Sec2 from "../components/index/sec2"
import Sec3 from "../components/index/sec3"
import Sec4 from "../components/index/sec4"

gsap.registerPlugin(ScrollTrigger)

const MainPage: NextPage = () => {
  const mouseCircleId = useId()
  const sec2TriggerId = useId()

  useEffect(() => {
    ;[1, 2, 3, 4, 5, 5].forEach((v) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.getElementById(`sec3-title-trigger-${v}`),
          start: "center bottom",
          end: "center top",
          scrub: true,
        },
      })
      if (v != 5)
        tl.to(document.getElementById(`sec3-title-${v}`), {
          y: 0,
          opacity: 1,
          duration: 1,
        })
      else
        tl.to(document.getElementById("sec3-title"), {
          opacity: 0,
          duration: 1.0,
        })
    })
  }, [])
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById(sec2TriggerId),
        start: "center bottom",
        end: "center top",
      },
    })
    tl.to(document.getElementById("sec2"), { opacity: 1, x: 0, duration: 1.5 })
  }, [sec2TriggerId])
  useEffect(() => {
    const moveCircleOnMouse = (x: number, y: number) => {
      gsap.to(document.getElementById(mouseCircleId), {
        left: x,
        top: y,
        duration: 0.3,
        ease: "sine.out",
      })
    }
    window.addEventListener("mousemove", (e) => {
      moveCircleOnMouse(e.clientX, e.clientY)
    })
    const appearMouseCircle = () => {
      gsap.to(document.getElementById(mouseCircleId), { opacity: 1 })
      window.removeEventListener("mousemove", appearMouseCircle)
    }
    window.addEventListener("mousemove", appearMouseCircle)
  }, [mouseCircleId])

  return (
    <>
      <div className="flex min-h-screen w-full flex-col overflow-clip">
        <div className="flex h-screen w-full max-w-7xl flex-row items-center justify-between self-center py-6 px-8 md:px-24">
          <div className="-mt-24 flex flex-col md:mt-0">
            <motion.div
              viewport={{ once: true }}
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                easings: ["easeIn"],
              }}
            >
              <p className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-5xl font-bold md:text-7xl">
                <span className="text-transparent">Full-Stack</span> Developer,
              </p>
              <p className="text-5xl font-bold md:text-7xl">
                <span className="line-through">UI</span>/UX Desginer
              </p>
              <p className="text-3xl font-semibold md:text-5xl">
                sujang958&apos;s portfolio
              </p>
            </motion.div>
            <div className="py-3.5"></div>
            <motion.div
              viewport={{ once: true }}
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                easings: ["easeIn"],
                delay: 0.6,
              }}
            >
              <p className="text-lg font-medium md:text-2xl">
                Hi, I&apos;m Sujang958 and you can call me Sujang <br />
                I&apos;m a developer who loves frontend, backend, and UX.
              </p>
            </motion.div>
          </div>
        </div>
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </div>
      <div
        className="pointer-events-none fixed top-1/2 left-1/2 z-50 -m-3 hidden h-6 w-6 cursor-default rounded-full bg-white opacity-0 mix-blend-difference drop-shadow-xl filter md:block"
        id={mouseCircleId}
      >
        &nbsp;
      </div>
    </>
  )
}

export default MainPage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )

  return {
    props: {},
  }
}
