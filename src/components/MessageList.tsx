import data from "data/notifications.json";

const MessageList: React.FC = () => {
    console.log(data)
    return(
        <div className={"bg-gray-200 w-full h-full rounded-lg p-2 h-60"}>
          <p>LIST OF MESSAGES</p>
          <ul>
            {data.notifications.map((notification) => (
                <li key={notification.id}>{notification.title}</li>
            ))}
           
          </ul>
        </div>
    )
}

export default MessageList