import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sign-up.css'
import {Link} from 'react-router-dom';
import {auth,signInWithGoogle,signInWithFacebook } from '../../firebase/firebase.utils';





export default class SignUp extends Component {


    render()
    {

  
        return(



        <div>

          <div className="backgroundImage2">

          </div>
          <div className="form">
            <form className="signup-form">
                <h2 className="text-center font-weight-bold">Don't have an account yet? Sign Up here!</h2><br/>
                
                <h3 className="text-center">Sign Up</h3>
                    <div className="form-group">
                       <label>Email address</label>
                       <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="confirm-password" className="form-control" placeholder="Confirm password"/>
                    </div>


                    <Link to = {"sign-in-page/"} className="btn btn-dark btn-block">Sign Up</Link>
                    
                  


                    </form>
                    </div>
                    </div>


         )
    }
}
