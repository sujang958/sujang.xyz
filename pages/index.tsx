import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { useEffect, useId } from "react"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const MainPage: NextPage = () => {
  const mouseCircleId = useId()
  const sec2TriggerId = useId()

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
      <div className="flex min-h-screen w-full flex-col px-24">
        <div className="flex h-screen w-full max-w-7xl flex-row items-center justify-between self-center py-6">
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
              <p className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-7xl font-bold">
                <span className="text-transparent">Full-Stack</span> Developer,
              </p>
              <p className="text-7xl font-bold">
                <span className="line-through">UI</span>/UX Desginer
              </p>
              <p className="text-5xl font-semibold">
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
              <p className="text-2xl font-medium">
                Hi, I&apos;m Sujang958, but you can call me Sujang <br />
                I&apos;m a developer who loves frontend, backend, and UX.
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className="relative flex h-screen w-full max-w-7xl translate-x-24 transform-gpu flex-col items-end justify-center self-center opacity-0"
          id="sec2"
        >
          <div className="absolute top-1/2 -z-10" id={sec2TriggerId}>
            &nbsp;
          </div>
          <p className="text-6xl font-bold">Skills I mainly use</p>
          <p className="text-4xl font-semibold">
            I love learning something new and cool
          </p>
          <div className="flex flex-row items-center space-x-8 py-16">
            <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
              <p className="text-2xl font-semibold">Next.js</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                The React Framework for Production Next.js gives you the best
                developer experience with all the features you need for
                production.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
              <p className="text-2xl font-semibold">Flutter</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                Flutter is an open source framework by Google for building
                beautiful, natively compiled, multi-platform applications from a
                single codebase.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
              <p className="text-2xl font-semibold">Nest.js</p>
              <div className="py-1"></div>
              <p className="break-words text-lg leading-tight">
                A progressive Node.js framework for building efficient, reliable
                and scalable server-side applications.
                <p className="py-1 text-sm">- Official introduction</p>
              </p>
            </div>
            <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
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
      </div>
      <div
        className="fixed top-1/2 left-1/2 z-50 -m-3 h-6 w-6 cursor-default rounded-full bg-white mix-blend-difference drop-shadow-xl filter"
        id={mouseCircleId}
      >
        &nbsp;
      </div>
    </>
  )
}

export default MainPage
