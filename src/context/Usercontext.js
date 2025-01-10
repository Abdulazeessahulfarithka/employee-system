import { createContext, useState } from "react";

let Usercontext=createContext()

export const UserProvider=({children})=>{
    const[user,setUser]=useState({name:" "})
    return <Usercontext.Provider value={{user,setUser}}>{children}</Usercontext.Provider>
}
export default Usercontext