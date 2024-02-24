import React from "react";

const PendingFee = () => {
  return (
    <div className="w-1/2 shadow-lg border border-transparent rounded-xl p-5 bg-white">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-slate-600 text-2xl">Total Fee</h1>
          <h1 className="mt-6 text-blue-800 text-4xl">₹ 10,00,000</h1>
        </div>
        <div>
          <img
            alt="logo"
            className="w-14 bg-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9t3rTxFaQ0ovVuk-JoJjNQaQwDHfWNR6eg&usqp=CAU"
          />
        </div>
      </div>
      <div className="mt-6">
        <span className=" text-2xl text-slate-400">Total Students </span>
        <span className="text-blue-500 text-2xl">750</span>
      </div>
    </div>
  );
};

export default PendingFee;
