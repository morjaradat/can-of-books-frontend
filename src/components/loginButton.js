import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  return !isAuthenticated && (
    // <button onClick={loginWithRedirect}>Log in</button>
    <Button variant="secondary" onClick={loginWithRedirect}>Log in</Button>
  );
}

export default LoginButton;