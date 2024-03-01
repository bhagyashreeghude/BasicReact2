import React from "react";
import { useDispatch } from "react-redux";
import { clearAll } from "../store/userSlice";


const ClearAll = () => {
  const dispatch = useDispatch();

  const allClear = ()=>{
    
    dispatch(clearAll());
    

  }
  return (
    <div>
      <div className="">
        <button  onClick={()=>allClear()} className=" bg-orange-400 p-2 m-2 rounded-lg">
          clear all user
        </button>
      </div>
    </div>
  );
};

export default ClearAll;
