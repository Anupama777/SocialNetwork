import React,{Component} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
//import './sign-in.css'
import './sign-in.styles.scss'
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input.component';

import {auth,signInWithGoogle,signInWithFacebook } from '../../firebase/firebase.utils';

import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'



class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: '',
        
      };
     
    }
     handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  
  
    render() {
      return (
      

        <div >

        <div  className="backgroundImage"></div>
      
        
           <div className='form'>
       
  
          <form className="signin-form" onSubmit={this.handleSubmit}>
          <h2 className="text-center font-weight-bold">Welcome!</h2><br/>
                <h3 className="text-center">Sign In</h3>


            <FormInput
              name='email'
              type='email'
             handleChange={this.handleChange}
              value={this.state.email}
             // onChange={(event) => this.inputChangedHandler(event)}
              //defaultValue="Enter your email"
              label='email'
            
              required
            />
           
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              //onChange={(event)=>this.inputChangedHandler(event)}
              handleChange={this.handleChange}
              label='password'
              required
            />
         
            <Link to= {"homepage"} className="btn btn-dark btn-block">Sign In</Link>
                    <div className="text-center pt-3">
                        Or continue with your social account
                    </div><br/>
              <div className='buttons'>
              <CustomButton className="btn btn-dark btn-block" onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
              </div>
              <div>
              <CustomButton  className=" mt-3 btn btn-dark btn-block" onClick={signInWithFacebook} isGoogleSignIn>
                Sign in with Facebook
              </CustomButton>
              
            </div><br/>

            <div  className="text-center">
                        <a href="/sign-up-page">Sign Up</a>
                        <span className="pt-2"> | </span>
                        <a href="/forgot-password">Forgot password</a>                    
                    </div>
          </form>
        </div>
        </div>
      );
    }
  }
   export default SignIn;
  


/*export default class SignIn extends Component {

    
    render()
    {

        return(
            <div >
                <div  className="backgroundImage">

                </div>
               

            
         <div className="form">
            <form className="signin-form">
                <h2 className="text-center font-weight-bold">Welcome!</h2><br/>
                <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                       <label>Email address</label>
                       <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                 /*   <Link to= {"homepage"} className="btn btn-dark btn-block">Sign In</Link>
                    <div className="text-center pt-3">
                        Or continue with your social account
                    </div>
                  {/*  <FacebookLoginButton className="mt-3 mb-3" onClick={signInWithFacebook}/>*/
                  /* <GoogleLoginButton className="mt-3 mb-3" onClick={signInWithGoogle}/>


                    <div  className="text-center">
                        <a href="/sign-up-page">Sign Up</a>
                        <span className="pt-2"> | </span>
                        <a href="/forgot-password">Forgot password</a>                    
                    </div>

                    </form>
                    </div>

                    </div>


         );
    }
}*/