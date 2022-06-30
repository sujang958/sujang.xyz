import { NextPage } from "next"
import Image from "next/image"
import { useId } from "react"

const MainPage: NextPage = () => {
  const section1ScrollPointId = useId()

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-black text-white after:absolute after:top-0 after:bottom-0 after:left-0 after:right-1/2 after:bg-white after:mix-blend-difference">
        <p className="text-8xl font-bold">Hello.</p>
        <p className="py-3 text-8xl font-bold">This is Me</p>
        <div className="z-10 flex flex-row items-center justify-center space-x-8 py-8">
          <a
            href={`#${section1ScrollPointId}`}
            className="w-40 rounded-md bg-black py-3 text-center text-xl font-semibold text-white"
          >
            Introduce
          </a>
          <button className="w-40 rounded-md bg-white py-3 text-center text-xl font-semibold text-black">
            Blog
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-6xl flex-col py-16 px-6">
        <div className="m-0 p-0" id={section1ScrollPointId}></div>
        <p className="text-5xl font-bold">Full-Stack Developer,</p>
        <p className="text-5xl font-bold">UI/UX Designer</p>
        <div className="py-6"></div>
        <p className="text-2xl font-medium">
          I&apos;m a developer who loves React, NestJS, Flutter and more.
        </p>
        <p className="text-2xl font-medium">
          && I&apos;m also intersted in <span className="line-through">UI</span>
          /UX.
        </p>
        <div className="py-3"></div>
        <p className="text-2xl font-medium">
          I&apos;m currently running some projects,&nbsp;
          <span className="cursor-pointer underline">
            click here to see them
          </span>
        </p>
      </div>
      <div className="flex w-full flex-col items-center bg-black py-16 px-6 text-white">
        {/* <div className="flex w-full animate-[horizontalScrolling_6s_linear_infinite] flex-row items-center space-x-6 overflow-visible whitespace-nowrap py-4">
          
          <p className="text-3xl font-medium">Javascript</p>
          <p className="text-3xl font-medium">Typescript</p>
          <p className="text-3xl font-medium">React</p>
          <p className="text-3xl font-medium">Next.js</p>
          <p className="text-3xl font-medium">Astro</p>
          <p className="text-3xl font-medium">Svelte</p>
          <p className="text-3xl font-medium">SvelteKit</p>
          <p className="text-3xl font-medium">TailwindCSS</p>
          <p className="text-3xl font-medium">Framer Motion</p>
          <p className="text-3xl font-medium">Figma</p>
          <p className="text-3xl font-medium">Flutter</p>
          <p className="text-3xl font-medium">Dart</p>
          <p className="text-3xl font-medium">Go</p>
          <p className="text-3xl font-medium">Nestjs</p>
          <p className="text-3xl font-medium">GraphQL</p>
          <p className="text-3xl font-medium">Pub/Sub</p>
          <p className="text-3xl font-medium">Firebase</p>
          <p className="text-3xl font-medium">Docker</p>
          <p className="text-3xl font-medium">Linux</p>

          <p className="text-3xl font-medium">Javascript</p>
          <p className="text-3xl font-medium">Typescript</p>
          <p className="text-3xl font-medium">React</p>
          <p className="text-3xl font-medium">Next.js</p>
          <p className="text-3xl font-medium">Astro</p>
          <p className="text-3xl font-medium">Svelte</p>
          <p className="text-3xl font-medium">SvelteKit</p>
          <p className="text-3xl font-medium">TailwindCSS</p>
          <p className="text-3xl font-medium">Framer Motion</p>
          <p className="text-3xl font-medium">Figma</p>
          <p className="text-3xl font-medium">Flutter</p>
          <p className="text-3xl font-medium">Dart</p>
          <p className="text-3xl font-medium">Go</p>
          <p className="text-3xl font-medium">Nestjs</p>
          <p className="text-3xl font-medium">GraphQL</p>
          <p className="text-3xl font-medium">Pub/Sub</p>
          <p className="text-3xl font-medium">Firebase</p>
          <p className="text-3xl font-medium">Docker</p>
          <p className="text-3xl font-medium">Linux</p>
        </div> */}
      </div>
      <div className="flex w-full max-w-6xl flex-col bg-white py-16 px-6 text-black">
        <p className="text-5xl font-bold">Projects</p>
        <div className="py-4"></div>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4">
          <div className="relative flex h-44 flex-col justify-between overflow-hidden rounded-lg bg-black p-4 text-white">
            <p className="text-3xl font-semibold">Smeals</p>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center rounded-lg bg-white/10 text-white opacity-0 backdrop-blur-lg transition duration-300 hover:opacity-100 p-2.5">
              <p className="text-base font-medium text-center">
                An easy way to get your school meals&apos; menu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
