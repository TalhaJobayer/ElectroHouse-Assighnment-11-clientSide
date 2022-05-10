import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import MenuLogo from '../../../Images/kisspng-electricity-computer-icons-symbol-company-electric-electric-5abdc00c68c5a8.0630823215223849084292.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [
   
    user,
    
  ] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div>
          
            {/* =========== */}
            <Navbar className='menu' collapseOnSelect expand="lg">
  <Container>
     <div className='menulogoContainer'>
     <img className='logo' src={MenuLogo} alt="" />
  <Link  className='Menulogo' to={'/home'} >
     Electro House</Link>
     </div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto menuText">
       <Link  to={'/home'} >Home</Link>
      <Link to={'/about'} >About</Link>
     
    </Nav>
    <Nav className='menuText'>
     
      
    
      {
          user?<Link  to={'/MyItems'} >Manage Inventory</Link>: ''
        }
      
      
      
      
        {
          user?<Link  onClick={ logout} to={'/logIn'} >Log Out</Link>: <Link  to={'/logIn'} >LogIn</Link>
        }
      
     
      {
        user?'':<Link to={'/signUp'} >SignUp</Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;