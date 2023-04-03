import React from "react";
import gsap from "gsap";
import { useAppContext } from "context/NotificationsContext";

const MessageBlock: React.FC = () => {
  const state = useAppContext();
  const { selectedNotification } = state;
  const messageBlockRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const messageBlock = messageBlockRef.current;
    if (messageBlock) {
      gsap.fromTo(
        messageBlock,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          ease: "Power.out3",
        }
      );
    }
  },[selectedNotification])

  
  return (
    <React.Fragment>
      {selectedNotification && (
        <div ref={messageBlockRef} className={`bg-gray-200 w-full rounded-lg p-2 h-96`}>
          <h4 className={"text-center py-2"}>{selectedNotification.title}</h4>
          <div className={"h-[1px] w-full bg-black/[0.1]"} />
          <p className={"px-2 whitespace-pre-wrap text-justify py-4"}>
            {selectedNotification.message}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default MessageBlock;
