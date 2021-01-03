import React,{useContext} from 'react'
import App from './App'
import Header from './Header'
import Login from './Login'
import {AuthProvider, AuthContext} from './AuthContext'
import {BrowserRouter , Route} from 'react-router-dom';
import Contact from './Contact'
import { Redirect } from 'react-router';




  function Home() {
     const authcontext = useContext(AuthContext);
      

    return (
        <BrowserRouter>
            <Header/>
            <Route exact path = '/Login' component={Login}></Route>
            <Route exact path = '/Contact' component={Contact}></Route>



            { authcontext.auth.email ? <App/>

            

            
            :<div></div>
                        

            }


         
            
            
        </BrowserRouter>
    )
    }

function HomeWithStore(){
return(
    <AuthProvider>
        <Home/>
    </AuthProvider>
 )
}
export default HomeWithStore;
