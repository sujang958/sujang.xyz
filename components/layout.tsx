import { FC, ReactNode } from "react"
import Header from "./header"

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <div className="relative min-w-full font-outfit flex flex-col">
      <header className="fixed top-0 max-w-5xl w-full self-center">
        <Header />
      </header>
      <div className="self-center flex flex-col">{children}</div>
    </div>
  )
}

export default Layout
