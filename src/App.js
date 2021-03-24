import logo from './logo.svg';
import React from 'react';

import {  Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header'
import SignInPage from './pages/sign-in-page/sign-in-page';
import SignUpPage from './pages/sign-up-page/sign-up-page';
import HomePage from './pages/homepage/homepage';
import ProfileDetailPage from './pages/profile-detail-page/profile-detail-page';






function App() {
  return (
    <div>
      <Header/>
     <div>

    
         
         <Route exact path='/' component={SignInPage} />
         <Route exact path="/sign-up-page" component={SignUpPage} />
         <Route exact path='/homepage' component={HomePage} />
         <Route exact path="/sign-in-page" component={SignInPage} />

        
         <Route exact path='/profiledetailpage/:id' component={ProfileDetailPage} />

        



    

     </div>

    </div>


  );
}




export default App;
