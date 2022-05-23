import Avvvatars from "avvvatars-react"
import { FC } from "react"
import { Inbox } from "../typings/inbox"

const MailItem: FC<Inbox> = ({ article, from, time }) => {
  return (
    <div className="flex cursor-pointer flex-col py-3 pl-6">
      <div className="flex w-full flex-row items-center space-x-3 py-1">
        <Avvvatars size={50} value={from} />
        <div className="flex flex-col">
          <p className="text-xl">{from}</p>
          <p className="text-base leading-tight">{time}</p>
        </div>
      </div>
      <div className="flex flex-col py-2 px-3">
        {article.map((message, i) => (
          <p
            key={i}
            className="break-words text-lg leading-tight text-gray-700"
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MailItem
