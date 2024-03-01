import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/userSlice";


const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.user);
  console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };


  return (
    <div className="">
      {data.map((dat, id) => {
        return (
          <li key={id}>
            {dat}
            <button onClick={() => deleteUser(id)} className="justify-center">
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
