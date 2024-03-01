import React from "react";
import ClearAll from "./ClearAll";
import UserDetails from "./UserDetails";

const Thapa = () => {
  return (
    <div className="">
      <div className="text-7xl bg-zinc-700 ">
        <h1 className="text-white">ADMIN TABLE</h1>
      </div>
      <div className="bg-gray-200">
        <button className="m-2 p-2 border-black rounded-lg pl-3">Home</button>
        <button className="m-2 p-2 border-black rounded-lg pl-3" >About</button>
        <button className="m-2 p-2 border-black rounded-lg pl-3">Projects</button>
        <button className="m-2 p-2 border-black rounded-lg pl-3">Code</button>
        <button className="m-2 p-2 border-black rounded-lg pl-3">Contact</button>
        <hr></hr>
      </div>
      <UserDetails/>
      <ClearAll/>
    </div>
  );
};

export default Thapa;
