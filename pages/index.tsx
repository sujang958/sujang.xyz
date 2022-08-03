import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { useEffect, useId } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const MainPage: NextPage = () => {
  const mouseCircleId = useId()
  const sec2TriggerId = useId()

  useEffect(() => {
    const img1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("sec4-project1-image-trigger1"),
        start: "center bottom",
        end: "center top",
        scrub: true,
      },
    })
    img1Tl.to(document.getElementById("sec4-project1-image1"), {
      opacity: 0,
      duration: 0.9,
    })
    const img2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("sec4-project1-image-trigger2"),
        start: "center bottom",
        end: "center top",
        scrub: true,
      },
    })
    img2Tl.to(document.getElementById("sec4-project1-image2"), {
      opacity: 1,
      duration: 0.9,
    })
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
          y: 30,
          duration: 1.2,
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
    tl.to(document.getElementById("sec2"), { opacity: 1, x: 0, duration: 2 })
  }, [sec2TriggerId])
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(document.getElementById(mouseCircleId), {
        left: e.clientX,
        top: e.clientY,
        duration: 0.3,
        ease: "sine.out",
      })
    })
  }, [mouseCircleId])

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
            <div className="absolute top-1/2 -z-10" id={sec2TriggerId}>
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
              className="flex flex-row flex-wrap items-center justify-center space-x-2 text-7xl space-y-4 font-bold md:space-x-6 md:text-8xl"
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
          <div className="flex hidden h-[300vh] w-full flex-row items-start md:block">
            <div className="relative flex w-1/2 flex-col px-20 py-2">
              <div
                className="sticky top-0 flex h-screen flex-col justify-center"
                id="sec4-project1-text1"
              >
                <p className="text-5xl font-bold">Smeals</p>
                <div className="py-3"></div>
                <p className="break-words text-2xl font-semibold">
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
                <div className="py-4"></div>
                <p className="text-xl">Made with Flutter, Firebase.</p>
              </div>
              <div className="h-screen"></div>
              <div className="h-screen"></div>
            </div>
            <div className="relative flex w-1/2 flex-col px-4 py-2">
              <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
                <Image
                  src={require("../public/imgs/project1-1.png")}
                  alt="Project Image"
                  width={720 * 0.6}
                  height={1280 * 0.6}
                  objectFit="contain"
                  id="sec4-project1-image1"
                />
              </div>
              <div className="relative h-screen">
                <div
                  className="absolute bottom-1/3"
                  id="sec4-project1-image-trigger1"
                >
                  &nbsp;
                </div>
                <div
                  className="absolute -bottom-1/2"
                  id="sec4-project1-image-trigger2"
                >
                  &nbsp;
                </div>
              </div>
              <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
                <Image
                  src={require("../public/imgs/project1-2.png")}
                  alt="Project Image"
                  width={720 * 0.6}
                  height={1280 * 0.6}
                  objectFit="contain"
                  id="sec4-project1-image2"
                  className="opacity-0"
                />
              </div>
            </div>
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
