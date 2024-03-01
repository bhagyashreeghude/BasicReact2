import React from "react";
import { attendence, fakeUserData, index } from "./api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  const shopbtn = (payload) => {
    console.log(payload);
    dispatch(shopbtn(payload));
  };
  const schoolBtn = (payload) => {
    console.log(payload);
    dispatch(schoolBtn(payload));
  };

  return (
    <div>
      <div className="flex ">
        <h1 className="pl-[40%]">List of User Details</h1>
        <button
          className=" pr-[1%] p-2 m-2 rounded-lg bg-blue-300"
          onClick={() => addNewUser(fakeUserData())}
        >
          add new user
        </button>
      </div>
      <div>
        <DisplayUsers />
      </div>
    </div>
  );
};

export default UserDetails;
