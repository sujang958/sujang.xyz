import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex w-full flex-col items-center justify-center py-4 px-2 dark:bg-black dark:text-white">
      <div className="flex w-full max-w-5xl flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="cursor-pointer text-xl font-bold md:text-2xl">
            <Link href="/">Seonghun Cho</Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly space-x-2.5">
          <div className="cursor-pointer text-lg font-bold hover:underline md:text-xl">
            <Link href="https://github.com/sujang958">Github</Link>
          </div>
          <div className="cursor-pointer text-lg font-bold hover:underline md:text-xl">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="cursor-pointer text-lg font-bold hover:underline md:text-xl">
            <Link href="/">Lab</Link>
          </div>
          <div className="cursor-pointer pl-1 md:pl-2">
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
