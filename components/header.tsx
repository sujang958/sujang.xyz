import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
  return (
    <div className="bg-white py-3 flex flex-row justify-between px-3 md:px-0 dark:bg-black dark:text-white transition duration-300">
      <div className="text-xl md:text-2xl font-bold">
        <Link href="/" passHref>
          Seonghun Cho
        </Link>
      </div>
      <div className="flex flex-row space-x-3.5 text-base md:text-xl mt-0.5 md:mt-0">
        <div className="hover:underline cursor-pointer">
          <Link href="/#about" passHref>
            About
          </Link>
        </div>
        <div className="hover:underline cursor-pointer">
          <Link href="/blog" passHref>
            Blog
          </Link>
        </div>
        <div className="hover:underline cursor-pointer">
          <Link href="/lab" passHref>
            Lab
          </Link>
        </div>
        <div
          className="pl-1.5 mt-0.5 md:mt-1"
          onClick={() => {
            const theme = localStorage.getItem("theme")
            if (theme && theme === "dark") {
              document.body.classList.remove("dark")
              localStorage.setItem("theme", "light")
            } else {
              document.body.classList.add("dark")
              localStorage.setItem("theme", "dark")
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
