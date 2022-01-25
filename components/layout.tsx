import { FC, ReactNode, useEffect } from "react"
import Header from "./header"

const Layout: FC<ReactNode> = ({ children }) => {
  useEffect(() => {
    const dark = localStorage.getItem("theme")
    if (dark && dark === "dark") {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }, [])

  return (
    <div className="relative min-w-full font-outfit flex flex-col">
      <header className="self-center fixed top-0 max-w-5xl w-full">
        <Header />
      </header>
      <div className="self-center flex flex-col w-full dark:bg-black dark:text-white transition duration-300">
        {children}
      </div>
    </div>
  )
}

export default Layout
