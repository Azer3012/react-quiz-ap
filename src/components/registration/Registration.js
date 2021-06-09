import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./css/registration.css";
import { v4 as uuidv4 } from 'uuid';
function Registration() {
  const { registration } = useContext(Context);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <h2>Registration</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        className="form-control col-md-4 "
        type="text"
      />
      <input
        onChange={(e => setPassword(e.target.value))}
        className="form-control col-md-4 my-3"
        type="password"
      />
      <button
        onClick={() => registration(uuidv4(), name, password)}
        className="btn btn-success col-md-4 form-control"
      >
        Registartion
      </button>
    </div>
  );
}

export default Registration;
