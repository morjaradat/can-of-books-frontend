import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks'
import Login from './Login';
import Profile from './components/profile'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import axios from 'axios';

class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    data:[],
  };
}

update=(da)=>{
  this.setState({data:da.data})
  // console.log(this.state.data)
}
  render() {
    const {isAuthenticated} = this.props.auth0 
    // console.log('app', this.props);
    
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
              {isAuthenticated ? <BestBooks auth0={this.props.auth0} update={this.update} data={this.state.data} /> : <Login/>}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
              <Profile/>
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
