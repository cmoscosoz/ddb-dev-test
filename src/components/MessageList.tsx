import React from "react";
import gsap from "gsap";

import { useAppContext } from "context/NotificationsContext";
import { NotificationType } from "types/notification";

const MessageList: React.FC = () => {
  const state = useAppContext();
  const ulRef = React.useRef<HTMLUListElement>(null);

  const handleItemClick = (id: number) => {
    const notification = state.notifications.find((notification:NotificationType) => notification.id === id) || null
    if(notification?.unread){
        state.notifications.some((notification:NotificationType) => {
            if(notification.id === id) notification.unread = false
        })
    }
    state.setSelectedNotification(notification)
  }

  React.useEffect(() => {
    const children = ulRef.current?.children
    if(children){
      gsap.fromTo(children, {y: 40, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1, ease: "Power.out3" , duration: 0.5})
    }
  }, [])
  
  return (
    <div className={"bg-gray-200 w-full h-full rounded-lg p-2 h-60"}>
      <p className="text-center tracking-wider">LIST OF MESSAGES</p>
      <ul ref={ulRef}>
        {state.notifications.map((notification: NotificationType) => {
          const className = notification.unread ? "font-bold" : "";
          return (
            <li
            onClick={() => handleItemClick(notification.id)}
              className={`${className} text-slate-600 px-2 py-1 hover:text-slate-900 hover:bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 rounded-lg cursor-pointer flex justify-between items-center`}
              key={notification.id}
            >
              <span>{notification.title}</span>
              {notification.unread && (
                <span className="px-2 font-light text-xs text-red-400">
                  unread
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageList;
