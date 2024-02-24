import React from "react";
import TotalFee from "./TotalFee";
import PendingFee from "./PendingFee";
import RecievedFee from "./RecievedFee";

const Fee = () => {
  return (
    <div className="w-8/12">
      <div className="flex ">
        <TotalFee />
        <PendingFee />
      </div>
      <RecievedFee />
    </div>
  );
};

export default Fee;
