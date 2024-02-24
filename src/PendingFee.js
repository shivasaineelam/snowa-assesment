import React from "react";

const PendingFee = () => {
  return (
    <div className="w-1/2 shadow-lg border border-transparent rounded-xl ml-6 p-5 bg-white">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-slate-600 text-2xl">Pending Fee</h1>
          <h1 className="mt-6 text-orange-800 text-4xl">₹ 4,00,000</h1>
        </div>
        <div>
          <img
            alt="logo"
            className="w-14 bg-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9t3rTxFaQ0ovVuk-JoJjNQaQwDHfWNR6eg&usqp=CAU"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between mx-4">
        <div>
          <h1> Term 1</h1>
          <h1 className="mt-5 text-blue-800 font-bold"> ₹ 50,000</h1>
        </div>
        <div>
          <h1> Term 1</h1>
          <h1 className="mt-5 text-blue-800 font-bold"> ₹ 3,50,000</h1>
        </div>
        <div>
          <h1> Term 1</h1>
          <h1 className="mt-5 text-blue-800 font-bold"> ₹ 0</h1>
        </div>
      </div>
    </div>
  );
};

export default PendingFee;
