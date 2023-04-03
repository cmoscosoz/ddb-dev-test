import data from "data/notifications.json";

const MessageList: React.FC = () => {
    console.log(data)
    return(
        <div className={"bg-gray-200 w-full h-full rounded-lg p-2 h-60"}>
          <p className="text-center tracking-wider">LIST OF MESSAGES</p>
          <ul>
            {data.notifications.map((notification) => (
                <li className="text-slate-600 px-2 py-1 hover:text-slate-900 hover:bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-lg cursor-pointer" key={notification.id}>{notification.title}</li>
            ))}
           
          </ul>
        </div>
    )
}

export default MessageList
