import { motion } from "framer-motion"
import Router from "next/router"
import { FC, useState } from "react"

const Header: FC = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <header className="fixed flex w-full flex-col items-center bg-like-black">
      <div
        className={`flex w-full max-w-7xl flex-row items-center justify-between rounded-b-lg px-7 py-3 text-like-black transition duration-300 ${
          isOpened ? "bg-white" : "bg-like-black"
        }`}
      >
        <div className="flex flex-row items-center space-x-6">
          <p
            className="cursor-pointer text-2xl hover:underline"
            onClick={() => {
              Router.push("/")
              setOpened(false)
            }}
          >
            Home
          </p>
          <p
            className="cursor-pointer text-2xl hover:underline"
            onClick={() => alert("Oops, there's nothing")}
          >
            Blog
          </p>
        </div>
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            onClick={() => setOpened((prev) => !prev)}
          >
            <motion.path
              variants={{
                inactive: {
                  stroke: "#fff",
                  d: "M4 6h16M4 12h16M4 18h16",
                },
                active: {
                  stroke: "#000",
                  d: "M6 18L18 6M6 6l12 12",
                },
              }}
              animate={isOpened ? "active" : "inactive"}
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
              id="hamburger"
            />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
