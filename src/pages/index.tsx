import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiMail } from "react-icons/fi";
import data from "data/notifications.json";

//components imports
import MessageList from "components/MessageList";

const Home: React.FC = () => {
  const { notifications } = data;
  const notificationRef = useRef<HTMLDivElement>(null);
  const notificationIconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notificationCount, setNotificationCount] = useState<number>(
    notifications.length
  );

  useEffect(() => {
    const notication = notificationRef.current;
    const noticationIcon = notificationIconRef.current;

    gsap.fromTo(
      noticationIcon,
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        delay: 3,
        opacity: 1,
        scale: 1,
        ease: "Power.out3",
      }
    );

    return () => {
      gsap.killTweensOf(notication);
    };
  }, [notificationRef, notificationIconRef, contentRef]);

  console.log(notifications);

  return (
    <div
      className={"relative flex flex-col justify-start items-center h-screen"}
    >
      <div
        className={"w-full h-fit flex justify-center items-center px-20 py-10"}
      >
        <div
          ref={notificationRef}
          className={
            "min-w-fit w-full bg-gray-200 rounded-full px-4 py-2 flex cursor-pointer justify-center items-center space-x-2 hover:shadow-md relative text-2xl"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={"inline-flex relative items-center"}>
            <p>Notification</p>
            <div ref={notificationIconRef} className={"absolute -right-10"}>
              <FiMail />
              <span className={"absolute -top-1.5 text-xs -right-2"}>
                {notificationCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full h-fit flex content-end items-start justify-center py-10 px-20"
        }
      >
        <MessageList />
      </div>
      <div
        className={
          "w-full h-fit flex content-end items-start justify-center py-10 px-20"
        }
      >
        <div className={"bg-gray-200 w-full rounded-lg p-2 h-96 opacity-0"}>
          <h4 className={"text-center py-2"}>Title</h4>
          <div className={"h-[1px] w-full bg-black/[0.1]"} />
          <p className={"whitespace-pre-wrap text-center py-4"}>Text</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
