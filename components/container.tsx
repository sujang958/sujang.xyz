import { FC } from "react"

const Container: FC<{ className?: string }> = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} flex flex-col min-h-screen min-w-full duration-300 transition dark:text-white dark:bg-black text-black bg-white`}
    >
      {children}
    </div>
  )
}

export default Container
