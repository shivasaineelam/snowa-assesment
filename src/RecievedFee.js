import React from "react";

const RecievedFee = () => {
  return (
    <div className="mt-10 border border-transparent bg-white rounded-lg p-5 flex justify-between">
      <div>
        <h1 className="text-slate-600 text-2xl"> Recieved Fee </h1>
        <h1 className="text-3xl text-green-400 font-semibold mt-5">
          ₹ 4,00,000
        </h1>
      </div>
      <div className="ml-16">
        <table className="table-auto">
          <thead>
            <tr>
              <th> </th>
              <th className="text-center underline text-green-500 px-4 ">
                Online
              </th>
              <th className="underline text-center text-red-300 px-10">
                Offline
              </th>
            </tr>
          </thead>
          <tr>
            <td className="py-5 text-2xl text-slate-600">Term1 Fee</td>
            <td className="py-5 px-4  text-blue-800 font-bold ">₹ 3,00,000</td>
            <td className=" py-5 px-10  text-blue-800 font-bold">₹ 0</td>
          </tr>
          <tr>
            <td className="pb-5 text-2xl text-slate-600">Term2 Fee</td>
            <td className="px-4 pb-5  text-blue-800 font-bold">₹ 50,000</td>
            <td className="px-10 pb-5  text-blue-800 font-bold">₹ 0</td>
          </tr>
          <tr>
            <td className="text-2xl text-slate-600">Term3 Fee</td>
            <td className="px-4  text-blue-800 font-bold">₹ 0</td>
            <td className="px-10  text-blue-800 font-bold">₹ 0</td>
          </tr>
        </table>
      </div>
      <div className="mx-20">
        <img
          alt="logo"
          className="w-14 bg-cover "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9t3rTxFaQ0ovVuk-JoJjNQaQwDHfWNR6eg&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default RecievedFee;
