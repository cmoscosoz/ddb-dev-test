import { useAppContext } from "context/NotificationsContext";
import React from "react";

const MessageBlock: React.FC = () => {
  
  const state = useAppContext();
  const { selectedNotification } = state
  const className = selectedNotification ? "opacity-100" : "opacity-0"
  return (
    <div className={`bg-gray-200 w-full rounded-lg p-2 h-96 ${className}`}>
      <h4 className={"text-center py-2"}>{selectedNotification.title}</h4>
      <div className={"h-[1px] w-full bg-black/[0.1]"} />
      <p className={"px-2 whitespace-pre-wrap text-justify py-4"}>{selectedNotification.message}</p>
    </div>
  );
};

export default MessageBlock;