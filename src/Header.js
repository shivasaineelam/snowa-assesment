import React from "react";

const Header = () => {
  return (
    <div className="flex m-2 p-2">
      <div className="w-2/4 m-2 p-2">
        <h1 className="text-blue-600 text-2xl">Dashboard</h1>
        <p className="text-slate-400 inline">Home</p>
        <span className="text-slate-800">/Dashboard</span>
      </div>
      <div className="flex w-2/4 items-center justify-between">
        <div>
          <select
            className="w-56 p-5 rounded-lg border-transparent bg-violet-300 bg-opacity-40"
            name="branch"
            id="branchid"
          >
            <option value="madhapur">Madhapur</option>
            <option value="ameerpet">Ameerpet</option>
            <option value="hiteccity">HITEC CITY</option>
            <option value="ghatkesar">Ghatkesar</option>
          </select>
        </div>
        <div>
          <select
            className="w-56 p-5 rounded-lg border-transparent bg-violet-300 bg-opacity-40"
            name="fyi"
            id="fyiid"
          >
            <option value="madhapur">FYI 2023-24</option>
            <option value="ameerpet">FYI 2022-23</option>
            <option value="hiteccity">FYI 2021-22</option>
            <option value="ghatkesar">FYI 2020-21</option>
          </select>
        </div>
        <div>
          <select
            className="w-56 p-5 rounded-lg border-transparent bg-violet-300 bg-opacity-40"
            name="term"
            id="termid"
          >
            <option value="t1">Term 1</option>
            <option value="t2">Term 2</option>
            <option value="t3">Term 3</option>
            <option value="t4">Term 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
