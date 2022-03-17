import { FC, useState } from "react"
import Link from "next/link"
import Container from "../components/container"

const Home: FC = () => {
  return (
    <Container>
      <div className="flex min-h-screen w-full max-w-5xl flex-col self-center">
        <div className="flex min-h-screen w-full flex-col justify-center px-4">
          <div className="flex flex-col py-4">
            <p className="text-3xl md:text-7xl">
              Hello,&nbsp;
              <span
                className="font-bold"
                onClick={() => alert("Internationally, it's Cho Song Hun.")}
              >
                I{"'"}m Seonghun Cho
              </span>
            </p>
            <p className="text-3xl md:text-7xl">
              a.k.a <span className="font-bold">Sujang</span>
            </p>
          </div>
          <div className="py-4">
            <button className="bg-black py-2 px-3 text-lg text-white transition duration-300 dark:bg-white dark:text-black md:py-2.5 md:px-4 md:text-xl">
              <Link href="#about" passHref>
                About me
              </Link>
            </button>
          </div>
        </div>
        <div id="about" className="flex min-h-screen w-full flex-col px-2 py-12">
          <div className="flex flex-col py-4">
            <p className="text-4xl font-bold md:text-6xl">About Me</p>
            <div className="flex w-full flex-col justify-evenly space-y-4 px-1 pt-6">
              <p className="break-words text-2xl font-light md:text-3xl">
                I&apos;m a developer who loves&nbsp;
                <span className="font-normal">Javascript-like</span> things.
              </p>
              <p className="break-words text-2xl font-light md:text-3xl">
                I make something from my ideas.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly space-y-4 py-4">
            <div className="flex flex-col justify-between space-y-1 py-4">
              <p className="text-4xl font-semibold">❤️ Techs that I love</p>
              <div className="flex flex-wrap gap-2 p-4">
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  TypeScript
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  JavaScript
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Node.js
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Deno
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  GoLang
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Linux
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Python
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Git
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  React
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Next.js
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Tailwindcss
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  MongoDB
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Firebase
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  Oauth2
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  HTTP
                </p>
                <p className="cursor-pointer bg-slate-200 py-1 px-3 text-sm transition duration-300 hover:bg-slate-300 dark:bg-slate-900 md:text-base">
                  ...more and more!
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-2.5 py-4">
              <div className="flex flex-col">
                <p className="text-3xl font-bold md:text-4xl">⌨️ Projects</p>
              </div>
              <div className="flex flex-col justify-evenly space-y-4 px-4 py-2">
                <div className="flex flex-col items-start justify-evenly py-1">
                  <div className="flex flex-row items-baseline justify-evenly space-x-2">
                    <p className="cursor-pointer text-2xl font-bold underline ">
                      Smeals
                    </p>
                    <p className="cursor-default text-2xl">
                      - built with Next.js, TailwindCSS
                    </p>
                  </div>
                  <div className="cursor-default px-2 pt-1">
                    <p className="text-lg">
                      →&nbsp; The searcher that makes you to be able to find
                      schools&apos; meals
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-evenly py-1">
                  <div className="flex flex-row items-baseline justify-evenly space-x-2">
                    <p className="cursor-pointer text-2xl font-bold underline ">
                      Todo
                    </p>
                    <p className="cursor-default text-2xl">
                      - built with Svelte Kit, TailwindCSS, Firebase
                    </p>
                  </div>
                  <div className="cursor-default px-2 pt-1">
                    <p className="text-lg">→&nbsp; Simple to-do app.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-2.5 py-4">
              <div className="flex flex-col">
                <p className="text-3xl font-bold md:text-4xl">✉️ Contacts</p>
              </div>
              <div className="flex flex-col justify-evenly space-y-2 py-1 px-4">
                <p className="text-2xl font-bold">Mail: sujang@kakao.com</p>
                <p className="text-2xl font-bold">Github: sujang958</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-2.5 py-4">
              <div className="flex flex-col">
                <p className="text-3xl font-bold md:text-4xl">🤑 Donate</p>
              </div>
              <div className="flex flex-col justify-evenly space-y-2 py-1 px-4">
                <a
                  href="https://www.buymeacoffee.com/sujang958"
                  className="cursor-pointer text-2xl underline md:text-3xl"
                >
                  Buy me a coffee!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
