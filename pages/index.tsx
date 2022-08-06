import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { useEffect, useId, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import IMG_PROJECT1_1 from "../public/imgs/project1-1.png"
import IMG_PROJECT1_2 from "../public/imgs/project1-2.png"

gsap.registerPlugin(ScrollTrigger)

const MainPage: NextPage = () => {
  const mouseCircleId = useId()
  const sec2TriggerId = useId()

  const [windowNull, setWindowNull] = useState<
    null | (Window & typeof globalThis)
  >(null)

  //const isLoaded = (): boolean => (windowNull ? true : false)

  useEffect(() => {
    setWindowNull(window ?? null)
  }, [])

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
  }, [windowNull])
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById(sec2TriggerId),
        start: "center bottom",
        end: "center top",
      },
    })
    tl.to(document.getElementById("sec2"), { opacity: 1, x: 0, duration: 1.5 })
  }, [sec2TriggerId, windowNull])
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
  }, [mouseCircleId])

  if (windowNull === null) return <></>

  return (
    <>
      <div className="flex min-h-screen w-full flex-col overflow-clip">
        <div className="flex h-screen w-full max-w-7xl flex-row items-center justify-between self-center py-6 px-8 md:px-24">
          <div className="flex flex-col">
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
        <div
          className="relative flex h-screen w-full max-w-7xl translate-x-24 transform-gpu flex-col items-end justify-center self-center opacity-0"
          id="sec2"
        >
          <div className="px-8 md:px-24">
            <div
              className="absolute top-1/3 -z-10 md:top-1/2"
              id={sec2TriggerId}
            >
              &nbsp;
            </div>
            <p className="text-right text-4xl font-bold md:text-6xl">
              Skills I mainly use
            </p>
            <p className="text-right text-lg font-semibold md:text-4xl">
              I love learning something new and cool
            </p>
          </div>
          <div className="flex w-full flex-row items-center space-x-8 overflow-x-auto overflow-y-hidden py-16 px-8 md:px-24">
            <div className="flex h-64 w-96 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4 md:w-72">
              <p className="text-2xl font-semibold">Next.js</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                The React Framework for Production Next.js gives you the best
                developer experience with all the features you need for
                production.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-96 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4 md:w-72">
              <p className="text-2xl font-semibold">Flutter</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                Flutter is an open source framework by Google for building
                beautiful, natively compiled, multi-platform applications from a
                single codebase.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-96 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4 md:w-72">
              <p className="text-2xl font-semibold">Nest.js</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                A progressive Node.js framework for building efficient, reliable
                and scalable server-side applications.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-96 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4 md:w-72">
              <p className="text-2xl font-semibold">MongoDB</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                MongoDB is a source-available cross-platform document-oriented
                database program. Classified as a NoSQL database program.
                <p className="py-1 text-sm">- Wikipedia, CC BY SA 3.0</p>
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex h-[500vh] max-w-7xl flex-col self-center px-8 md:px-24">
          <div className="absolute top-[3%]" id="sec3-title-trigger-1">
            &nbsp;
          </div>
          <div className="absolute top-[20%]" id="sec3-title-trigger-2">
            &nbsp;
          </div>
          <div className="absolute top-[40%]" id="sec3-title-trigger-3">
            &nbsp;
          </div>
          <div className="absolute top-[60%]" id="sec3-title-trigger-4">
            &nbsp;
          </div>
          <div className="absolute top-[80%]" id="sec3-title-trigger-5">
            &nbsp;
          </div>
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
            <div
              className="flex flex-row flex-wrap items-center justify-center space-x-2 space-y-4 text-7xl font-bold md:space-x-6 md:text-8xl"
              id="sec3-title"
            >
              <span
                id="sec3-title-1"
                className="translate-y-10 transform opacity-0"
              >
                Now
              </span>
              <span
                id="sec3-title-2"
                className="translate-y-10 transform opacity-0"
              >
                Introduce
              </span>
              <span
                id="sec3-title-3"
                className="translate-y-10 transform opacity-0"
              >
                My
              </span>
              <span
                id="sec3-title-4"
                className="translate-y-10 transform opacity-0"
              >
                Projects
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-7xl flex-col self-center py-8 px-8 md:px-24">
          <div className="relative flex w-full flex-col items-center">
            <div className="sticky top-24 flex h-[50vh] w-full flex-col items-center justify-center">
              <Image
                src={IMG_PROJECT1_1}
                alt="Project Image"
                objectFit="contain"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              viewport={{
                margin: "-40%",
              }}
              whileInView={{
                opacity: 1,
              }}
              className="sticky top-0 z-10 flex min-h-[50vh] w-full max-w-sm flex-col justify-between rounded-xl bg-black py-5 px-6"
            >
              <div>
                {/* todo: 이걸로 통일 */}
                <p className="text-3xl font-bold">Smeals</p>
                <div className="py-2"></div>
                <p className="break-words text-xl font-semibold">
                  Smeals is an iOS and Android app for Korean students. <br />
                  Smeals allows you to know schools&apos; meals. <br />
                  Visit{" "}
                  <span
                    className="cursor-pointer underline"
                    onClick={() => open("https://smeals.co")}
                  >
                    this link
                  </span>{" "}
                  to download.
                </p>
              </div>
              <div className="py-3">
                <p className="text-lg">- Made with Flutter, Firebase</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none fixed top-1/2 left-1/2 z-50 -m-3 hidden h-6 w-6 cursor-default rounded-full bg-white mix-blend-difference drop-shadow-xl filter md:block"
        id={mouseCircleId}
      >
        &nbsp;
      </div>
    </>
  )
}

export default MainPage
