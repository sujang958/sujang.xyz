import { FC, ReactNode } from "react"
import Footer from "./footer"
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
        <footer className="text-white">
          <Footer />
        </footer>
    </>
  )
}

export default Layout