import { FC } from "react"

const MailContainer: FC<{ children: any }> = ({ children }) => {
  return (
    <div className="flex w-5/6 flex-col items-start rounded-r-xl py-8 pr-2 sm:w-[72%] md:w-[77%]">
      {children}
    </div>
  )
}

export default MailContainer
