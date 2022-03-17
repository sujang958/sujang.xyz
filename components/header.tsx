import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col justify-center items-center dark:bg-black dark:text-white w-full py-4 px-2">
      <div className="flex flex-row justify-between items-center max-w-5xl w-full">
        <div className="flex flex-row items-center">
          <div className="cursor-pointer font-bold text-2xl">
            <Link href="/">Seonghun Cho</Link>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2.5 justify-evenly">
          <div className="cursor-pointer font-bold text-xl hover:underline">
            <Link href="/">Github</Link>
          </div>
          <div className="cursor-pointer font-bold text-xl hover:underline">
            <Link href="/">Blog</Link>
          </div>
          <div className="cursor-pointer font-bold text-xl hover:underline">
            <Link href="/">Lab</Link>
          </div>
          <div className="cursor-pointer pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
