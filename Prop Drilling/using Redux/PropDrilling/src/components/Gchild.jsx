// src/GrandChild.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";

function Gchild() {
  const user = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>User: {user}</p>
      <button onClick={() => dispatch(updateUser("Sibun Mohanty"))}>
        Update User
      </button>
    </div>
  );
}

export default Gchild;
