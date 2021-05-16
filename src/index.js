import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-cn3k1zw0.us.auth0.com"
    clientId="AYLqV8evRv6HnQUwrWKXFkveOCRwuXPQ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
