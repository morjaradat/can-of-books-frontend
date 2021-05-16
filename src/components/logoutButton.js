import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    // <button onClick={() => {
    //   logout({ returnTo: window.location.origin });
    // }}>Log out</button>
    <Button variant="secondary" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</Button>
  );
}

export default LogoutButton;