import React from "react";
import gsap from "gsap";

import { useAppContext } from "context/NotificationsContext";

import { FiMail } from "react-icons/fi";

const NotificationHeader: React.FC = () => {
  const state = useAppContext();

  const { notifications, selectedNotification } = state;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const notificationRef = React.useRef<HTMLDivElement>(null);
  const notificationIconRef = React.useRef<HTMLDivElement>(null);

  const unreadMesseges = () => {
   return notifications.reduce(
      (acc, notification) => (notification.unread ? acc + 1 : acc),
      0
    )
  }


  const [counter, setCounter] = React.useState<number>(unreadMesseges);

  React.useEffect(() => {
    setCounter(unreadMesseges);
  }, [selectedNotification]);

  React.useEffect(() => {
    const notication = notificationRef.current;
    const noticationIcon = notificationIconRef.current;

    gsap.fromTo(
      noticationIcon,
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        delay: 0.2,
        opacity: 1,
        scale: 1,
        ease: "Power.out3",
      }
    );

    return () => {
      gsap.killTweensOf(notication);
    };
  }, [notificationRef, notificationIconRef, counter]);

  return (
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
            {counter}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationHeader;
