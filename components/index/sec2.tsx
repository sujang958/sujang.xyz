import gsap from "gsap"
import { NextPage } from "next"
import { useEffect, useId } from "react"

const Sec2: NextPage = () => {
  const sec2TriggerId = useId()

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

  return (
    <div
      className="relative flex h-screen w-full max-w-7xl translate-x-24 transform-gpu flex-col items-end justify-center self-center opacity-0"
      id="sec2"
    >
      <div className="px-8 md:px-24">
        <div className="absolute top-1/3 -z-10 md:top-1/2" id={sec2TriggerId}>
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
            developer experience with all the features you need for production.
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
            A progressive Node.js framework for building efficient, reliable and
            scalable server-side applications.
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
  )
}

export default Sec2
