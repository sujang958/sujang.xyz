import { FC, ReactNode } from "react"
import Header from "./header"

const Layout: FC<ReactNode> = ({ children }) => {
  return (
      <>
        <div className="text-white">
            <Header />
        </div>
        <main className="text-white text-center">
            {children}
        </main>
    </>
  )
}

export default Layout