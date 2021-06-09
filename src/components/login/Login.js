import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./css/login.css";

import quiz from '../questions/quiz.json';
function Login() {
  const { users,checkUsers,isLogin,quiz } = useContext(Context);

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  console.log(quiz)

  return (
    <div className="login">
      <h2>Login</h2>
      
      
      <input
        onChange={(e) => setName(e.target.value)}
        className="form-control col-md-4 "
        type="text"
      />
      <input onChange={(e) => setPassword(e.target.value)} className="form-control col-md-4 my-3" type="password" />
      <button onClick={()=>checkUsers(name,password)} className="btn btn-success col-md-4 form-control">Sign in</button>

      <p>{isLogin?"daxil olduz":null}</p>
    </div>


  );
}

export default Login;
