import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
  return (
    <div className="bg-white py-3 flex flex-row justify-between">
      <div className="text-2xl font-bold">
        <Link href="/" passHref>
          Seonghun Cho
        </Link>
      </div>
      <div className="flex flex-row space-x-3.5 text-xl">
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
        <div className="pl-1.5 mt-1">
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
