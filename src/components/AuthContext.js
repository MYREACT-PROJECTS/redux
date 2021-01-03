import React,{useState,useEffect} from 'react'



export const AuthContext=React.createContext();



export  function AuthProvider(props) {
    const [auth,setAuth]= useState({});
    useEffect(()=>{
        const email= localStorage.getItem('email');
        const token=localStorage.getItem('token')
        
        //@todo : vaildate it from SERVER OVER API
        if (email){
            setAuth({
                email,token
            })
        }
    },[]);
    return (
       <AuthContext.Provider value= {{auth,setAuth}}>
           {props.children}
       </AuthContext.Provider>
    )
}
