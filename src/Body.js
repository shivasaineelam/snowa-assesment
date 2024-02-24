import React from "react";
import NoticeBoard from "./NoticeBoard";
import Fee from "./Fee";

const Body = () => {
  return (
    <div className="flex m-12">
      <Fee />
      <NoticeBoard />
    </div>
  );
};

export default Body;
