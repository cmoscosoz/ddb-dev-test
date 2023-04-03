import React from "react";

//components imports
import MessageList from "components/MessageList";
import MessageBlock from "components/MessageBlock";
import NotificationHeader from "components/NotificationHeader";

const Home: React.FC = () => {

  return (
    <div
      className={"relative flex flex-col justify-start items-center h-screen"}
    >
      <div
        className={"w-full h-fit flex justify-center items-center px-20 py-10"}
      >
        <NotificationHeader />
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
       <MessageBlock />
      </div>
    </div>
  );
};

export default Home;
