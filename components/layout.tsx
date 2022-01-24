import { FC, ReactNode } from "react"

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <div className="font-outfit flex flex-col items-center">
      <div className="max-w-5xl flex flex-col">{children}</div>
    </div>
  )
}

export default Layout
