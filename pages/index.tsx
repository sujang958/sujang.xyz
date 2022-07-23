import { NextPage } from "next"
import Image from "next/image"
import { useId } from "react"

const MainPage: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col px-24">
      <div className="flex h-screen w-full max-w-7xl flex-row items-center justify-between self-center py-6">
        <div className="flex flex-col">
          <p className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-7xl font-bold">
            <span className="text-transparent">Full-Stack</span> Developer,
          </p>
          <p className="text-7xl font-bold">
            <span className="line-through">UI</span>/UX Desginer
          </p>
          <p className="text-5xl font-semibold">sujang958&apos;s portfolio</p>
          <div className="py-3.5"></div>
          <p className="text-2xl font-medium">
            Hi, I&apos;m Sujang958, but you can call me Sujang <br />
            I&apos;m a developer who loves frontend, backend, and UX.
          </p>
        </div>
      </div>
      <div className="flex h-screen w-full max-w-7xl flex-col items-end justify-center self-center">
        <p className="text-6xl font-bold">Skills I mainly use</p>
        <p className="text-4xl font-semibold">I love opensources btw</p>
        <div className="flex flex-row items-center space-x-8 py-16">
          {/* Todo: add view all skills */}
          <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
            <p className="text-2xl font-semibold">Next.js</p>
            <div className="py-1"></div>
            <p className="break-words text-lg leading-tight">
              The React Framework for Production Next.js gives you the best
              developer experience with all the features you need for
              production.
            </p>
          </div>
          <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
            <p className="text-2xl font-semibold">Flutter</p>
            <div className="py-1"></div>
            <p className="break-words text-lg leading-tight">
              Flutter is an open source framework by Google for building
              beautiful, natively compiled, multi-platform applications from a
              single codebase.
            </p>
          </div>
          <div className="flex h-64 w-72 transform-gpu flex-col rounded-lg bg-white py-4 px-5 text-[#111] transition duration-300 hover:-translate-y-4">
            <p className="text-2xl font-semibold">Nest.js</p>
            <div className="py-1"></div>
            <p className="break-words text-lg leading-tight">
              A progressive Node.js framework for building efficient, reliable
              and scalable server-side applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
