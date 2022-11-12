import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { GetServerSideProps, NextPage } from "next"
import { useEffect, useId } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const MainPage: NextPage = () => {
  const mouseCircleId = useId()

  useEffect(() => {
    const mouseCircle = document.getElementById(mouseCircleId)
    const moveCircleOnMouse = (x: number, y: number) => {
      gsap.to(mouseCircle, {
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

  useEffect(() => {
    const sec1Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec1-trigger-1"),
        start: "center bottom",
        end: "center 75%",
      },
    })

    sec1Timeline.to("#sec1-title-1", {
      opacity: 0,
      scale: 1.1,
    })
  }, [])
  useEffect(() => {
    const sec1Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec1-trigger-1"),
        start: "center 75%",
        end: "center 25%",
      },
    })

    sec1Timeline.to("#sec1-title-2", {
      opacity: 1,
      scale: 1.1,
    })
    sec1Timeline.to("#sec1-title-2", {
      opacity: 0,
      scale: 1.2,
    })
  }, [])
  useEffect(() => {
    const sec1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("sec1-trigger-1"),
        start: "center bottom",
        end: "center 80%",
        scrub: true,
      },
    })
    sec1Timeline.to("#sec1-icon-1", { opacity: 0, scale: 1.1 })
  }, [])

  useEffect(() => {
    const sec2Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec2-trigger-1"),
        start: "center 90%",
        end: "center 60%",
      },
    })

    sec2Timeline.to("#sec2-title-1", { opacity: 1 })
    sec2Timeline.to("#sec2-title-1", { opacity: 0.1 })
  }, [])
  useEffect(() => {
    const sec2Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec2-trigger-1"),
        start: "center 70%",
        end: "center 50%",
      },
    })

    sec2Timeline.to("#sec2-title-2", { opacity: 1 })
    sec2Timeline.to("#sec2-title-2", { opacity: 0.1 })
  }, [])
  useEffect(() => {
    const sec2Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec2-trigger-1"),
        start: "center 50%",
        end: "center 20%",
      },
    })

    sec2Timeline.to("#sec2-title-3", { opacity: 1 })
    sec2Timeline.to("#sec2-title-3", { opacity: 0.1 })
  }, [])
  useEffect(() => {
    const sec2Timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: document.getElementById("sec2-trigger-1"),
        start: "center 40%",
        end: "center 10%",
      },
    })

    sec2Timeline.to("#sec2-title-4", { opacity: 1 })
  }, [])

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-clip">
        <div
          id="sec1"
          className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-24"
        >
          <div
            className="flex flex-col items-start justify-center"
            id="sec1-title-1"
          >
            <p className="text-5xl font-black tracking-tight">
              Hello, I&apos;m
            </p>
            <p className="text-9xl font-black tracking-tight">SUJANG958</p>
          </div>
          <div id="sec1-title-2" className="absolute opacity-0">
            <p className="text-7xl font-bold">A developer in Korea</p>
          </div>
          <p
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transform-gpu"
            id="sec1-icon-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 stroke-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </p>
        </div>

        <div id="sec1-trigger-1"></div>
        <div className="h-[35vh]"></div>

        <div id="sec2" className="flex h-screen flex-col items-center">
          <div className="flex h-screen flex-col items-start justify-center px-24">
            <p
              className="relative text-8xl font-bold leading-[1.05] text-white opacity-10"
              id="sec2-title-1"
            >
              <div id="sec2-trigger-1" className="absolute top-4">
                &nbsp;
              </div>
              Hello there,
            </p>
            <p
              className="text-8xl font-bold leading-[1.05] text-white opacity-10"
              id="sec2-title-2"
            >
              My name is Sujang
            </p>
            <p
              className="text-8xl font-bold leading-[1.05] text-white opacity-10"
              id="sec2-title-3"
            >
              And I&apos;m a developer.
            </p>
            <div
              className="text-8xl font-bold leading-[1.05] text-white opacity-10"
              id="sec2-title-4"
            >
              <p>I&apos;m passionate about</p>
              <p> making something cool</p>
            </div>
          </div>
        </div>
        <div className="h-[30vh]"></div>

        <div id="sec3" className="flex h-[60vh] w-full flex-col items-center">
          <div className="flex w-full max-w-7xl flex-col px-24 py-12">
            <p className="text-8xl font-bold">Contact</p>
            <a
              className="z-50 mt-4 block cursor-pointer text-5xl hover:underline"
              href="https://github.com/sujang958"
              target={"_blank"}
              rel="noreferrer"
            >
              &gt; Github
            </a>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none fixed top-1/2 left-1/2 z-50 -m-3 hidden h-4 w-4 rounded-full bg-white opacity-100 mix-blend-difference drop-shadow-xl filter md:block"
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
