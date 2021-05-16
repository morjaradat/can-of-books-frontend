import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  console.log(user)
  return (
    <>
      {/* <div>Hello {user.name}</div>
      <div>Hello {user.email}</div>
      <img src={user.picture} alt='' /> */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Hello {user.name}</Card.Title>
          <Card.Text>
            E-mail: {user.email}
          </Card.Text>
          <Card.Img variant="top" src={user.picture} alt=''  />
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;
