import React from "react";

const NoticeBoard = () => {
  return (
    <div className="w-4/12 m-2 ml-8  bg-white">
      <div className="bg-violet-400 p-5 rounded-lg">NoticeBoard|Latest</div>
      <ul className="m-4">
        <li className="flex items-center">
          <div className="text-slate-400 w-16">5 days</div>
          <div className="m-5 text-base">🔵</div>
          <div>sports day is commencing from 15th march 2024</div>
        </li>
      </ul>
    </div>
  );
};

export default NoticeBoard;
