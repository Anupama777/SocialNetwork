import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { auth } from '../../firebase/firebase.utils';
import { NavDropdown } from 'react-bootstrap';


const Header = (props) => (

   <div> <Navbar bg="dark" variant="dark">
   <Navbar.Brand href="/">
     <img
       alt=""
       src={'assets/logo.png'}
       width="30"
       height="30"
       className="d-inline-block align-top"
     />{' '}
   Kinder
   </Navbar.Brand>

  <Nav className="ml-auto">


  {

     window.location.pathname === '/homepage'?<Nav.Link href="/homepage">Home</Nav.Link>:""

  }

  {

    window.location.pathname === '/homepage'?<Nav.Link href="/">LogOut</Nav.Link>:""
  
  }
  

   {/* <Nav.Link href="/homepage">Home</Nav.Link>
 <Nav.Link href="/">LogOut</Nav.Link>*/}
    

     {/* {
         localStorage.getItem('user-info') ?
         <>
          
         <Link to="/sign-up-page">SignUp</Link>
         </>
         :
       <>
          <Link to="/homepage">Home</Link>
       </>
      }*/}

    
</Nav>

{/*{localStorage.getItem('user-info')?

<Nav>
  <NavDropdown title="User">
    <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
  </NavDropdown>
</Nav>
:
null
    }
  */}


 </Navbar>

 </div>
 );

 

export default Header;
