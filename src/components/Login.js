import React, {useState,useContext} from 'react'
import {AuthProvider, AuthContext} from './AuthContext'
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";






export default function Login() {
    const authcontext = useContext(AuthContext);

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const history = useHistory();
    const navigateTo = () => history.push('/');//eg.history.push('/login');
  

   const login = (e)=>{
        e.preventDefault()
        console.log({email,password})
        //@todo send API request to validate and get token
        if ( password ==='123' ){
            const token = 'aabc';
            localStorage.setItem('token',token);
            localStorage.setItem('email',email);
            authcontext.setAuth({token,email});
            navigateTo()
           
            
        }else{
                alert('wrong information');
            }
        }

    
    

    return (
        <div>
            <form>
                <h2 >LOGIN </h2>
                <input type = "email" className="form-control " placeholder="email" value={email} 
                onChange={e=>setEmail(e.target.value)}/>
                <br/>
                <input type = "password" className="form-control" placeholder="password" value={password}
                onChange={e=> setPassword(e.target.value)}/>
                <br/>
                <button className="btn btn-primary" onClick={login}>SEND
                
                </button>

            </form>
            
        </div>
    )
}
