import { createContext, useState } from "react";


import quiz from '../questions/quiz.json'

export const Context=createContext();

console.log(quiz);

const ContextProvider=({children})=>{
    //users
    const [users,setUsers]=useState([])

    const [isLogin,setIsLogin]=useState(false)
    //registration
    const registration=(id,username,password)=>{
        setUsers([...users,{id,username,password}])

       
    }

   


  const checkUsers=(name,password)=>{
    users.forEach(user=>{
        if(user.username===name && user.password===password){
            setIsLogin(!isLogin)
        }
    })
  }
    
    
    return (
        <Context.Provider value={{users,registration,checkUsers,isLogin,quiz}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;