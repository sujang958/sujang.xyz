import { FC, useState } from "react"
import Link from "next/link"

const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(1)

  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-screen px-5">
        <div className="flex-1 flex flex-col place-content-center gap-y-4">
          <div className="">
            <p className="text-7xl">
              Hello, <span className="font-bold">I{"'"}m Seonghun Cho</span>
            </p>
            <p className="text-7xl">
              a.k.a <span className="font-bold">Sujang</span>
            </p>
          </div>
          <div className="">
            <div className="flex-1 flex-col">
              <div className="flex-1">
                <button className="bg-black text-white py-2.5 px-4 text-xl">
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
        className="flex flex-col min-h-screen px-4 place-content-center"
        id="about"
      >
        <div className="flex flex-col">
          <p className="text-6xl font-bold">About Me</p>
          <div className="mt-6 text-2xl">
            <p>I{"'"}m a developer who loves things of Javascript.</p>
            <p className="mt-6">I make something from my ideas.</p>
          </div>
          <div className="mt-10 text-3xl">
            <p>❤️ Techs ❤️</p>
            <div className="pt-4 px-2 flex flex-wrap gap-2 text-base">
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                TypeScript
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                JavaScript
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Node.js
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Deno
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                GoLang
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Linux
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Python
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Git
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                React
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Next.js
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Tailwindcss
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                MongoDB
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Firebase
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                Oauth2
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                HTTP
              </p>
              <p className="cursor-pointer transition duration-300 hover:bg-slate-300 bg-slate-200 py-1 px-3">
                ...more and more!
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-4xl font-semibold">⌨️ Projects</p>
            <div className="flex flex-col mt-6 px-6">
              <p className="text-2xl">
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
          <div className="mt-12">
            <p className="text-4xl font-semibold">✉️ Contacts</p>
            <div className="flex flex-col mt-6 px-6">
              <p className="text-2xl">sujang@kakao.com</p>
              <p className="text-2xl">
                _someone#4590 <span className="text-lg">(Discord)</span>
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-4xl font-semibold">💵 Donate</p>
            <div className="mt-3 px-4">
              <a
                href="https://www.buymeacoffee.com/sujang958"
                className="cursor-pointer underline text-3xl"
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
