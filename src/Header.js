import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './components/logoutButton';
import LoginButton from './components/loginButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    // console.log('h1')
const {isAuthenticated} = this.props.auth0 
    // console.log(isAuthenticated)
    // console.log('h2')
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>

        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
