import React,{useContext} from 'react'
import {AuthProvider, AuthContext} from './AuthContext'
import Login from './Login';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";



export default function Header() {
    const authcontext = useContext(AuthContext);

   const Logout= ()=>{
        authcontext.setAuth({});
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        
        

    }
    return (
       
            <nav className="navbar navbar-light bg-light ">
            <Link to = "/" className="navbar-brand mt-2" >HOME</Link>
            <Link to = "/Contact" className="navbar-brand mt-2" >Contact</Link>

             <div>
                 {
                     authcontext.auth.email ? <div>
                         
                       {authcontext.auth.email}
                         <button className="btn btn-danger btn-sm" onClick={Logout}>logut</button>
                         </div>:
                         <Link to = "/login" className="btn btn-primary"> log in </Link>
                         

                         

                        


                 }
             
             

                 </div>

            </nav>   
       
    )
}
