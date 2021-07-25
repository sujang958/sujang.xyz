import { FC } from "react"
import Link from "next/link"

const Header: FC = () => {
    return (
        <nav className="shadow flex flex-row justify-items-stretch bg-gray-900 p-4 md:p-8">
            <div className="flex flex-row gap-2 md:gap-4">
                <div className="mx-4">
                    <Link href="/">
                        <span className="text-xl md:text-2xl items-center">
                        Sujang958
                        </span>
                    </Link>
                </div>
                <div className="flex text-base md:text-lg mx-4 mt-0.5 md:mt-1">asdf</div>
            </div>
        </nav>
    )
}

export default Header