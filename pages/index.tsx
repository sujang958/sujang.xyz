import { FC, useState } from "react"
import Link from "next/link"

const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(1)

  return (
    <div className="max-w-5xl flex flex-col self-center">
      <div className="w-full flex flex-col min-h-screen px-5">
        <div className="flex-1 flex flex-col place-content-center gap-y-4">
          <div className="text-3xl md:text-7xl">
            <p>
              Hello,{" "}
              <span
                className="font-bold"
                onClick={() => alert("Internationally, it's Cho Song Hun.")}
              >
                I{"'"}m Seonghun Cho
              </span>
            </p>
            <p>
              a.k.a <span className="font-bold">Sujang</span>
            </p>
          </div>
          <div className="mt-0.5">
            <div className="flex-1 flex-col">
              <div className="flex-1">
                <button className="bg-black text-white py-2 px-3 md:py-2.5 md:px-4 text-lg md:text-xl dark:bg-white dark:text-black transition duration-300">
                  <Link href="#about" passHref>
                    About me
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col min-h-screen px-4 place-content-center pt-16 md:pt-0"
        id="about"
      >
        <div className="flex flex-col">
          <p className="text-4xl md:text-6xl font-bold">About Me</p>
          <div className="mt-4 md:mt-6 text-xl md:text-2xl">
            <p>I{"'"}m a developer who loves things of Javascript.</p>
            <p className="mt-4 md:mt-6">I make something from my ideas.</p>
          </div>
          <div className="mt-6 md:mt-10 text-3xl">
            <p className="font-semibold">❤️ Techs ❤️</p>
            <div className="pt-4 px-2 flex flex-wrap gap-2 text-sm md:text-base">
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                TypeScript
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                JavaScript
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Node.js
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Deno
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                GoLang
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Linux
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Python
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Git
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                React
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Next.js
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Tailwindcss
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                MongoDB
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Firebase
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Oauth2
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                HTTP
              </p>
              <p className="dark:bg-slate-900 cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                ...more and more!
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <p className="text-3xl md:text-4xl font-semibold">⌨️ Projects</p>
            <div className="flex flex-col mt-6 px-6">
              <p className="text-xl md:text-2xl">
                <a
                  href="https://smeals.co"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline cursor-pointer"
                >
                  Smeals
                </a>{" "}
                - Open-source Korea schools{"'"} meals website.
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <p className="text-3xl md:text-4xl font-semibold">✉️ Contacts</p>
            <div className="flex flex-col mt-6 px-6 text-xl md:text-2xl">
              <p>sujang@kakao.com</p>
              <p>
                sujang958 &nbsp;
                <span className="text-sm md:text-lg">(Github)</span>
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12">
            <p className="text-3xl md:text-4xl font-semibold">💵 Donate</p>
            <div className="mt-3 px-4">
              <a
                href="https://www.buymeacoffee.com/sujang958"
                className="cursor-pointer underline text-2xl md:text-3xl"
              >
                Buy me a coffee!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
