import { FC, ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"

const Layout: FC<ReactNode> = ({ children }) => {
  return (
      <>
        <div className="text-white w-full">
            <Header />
        </div>
        <main className="text-white text-center h-screen">
            {children}
        </main>
        <footer className="text-white">
          <Footer />
        </footer>
    </>
  )
}

export default Layout