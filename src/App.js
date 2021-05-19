import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks'
import Login from './Login';
import Profile from './components/profile';
import BookFormModal from './components/BookFormModal';
import UpdateFormModel from './components/UpdateFormModel'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      bookName: '',
      description: '',
      status: '',
      index: 0,
      showCatsComponent: false,
      showUpdate: false,
    };
  }
  showUpdateModel = (idx) => {
    console.log(idx)
    const newBookArr = this.state.data.filter((value, index) => {
      return idx === index
    });
    // console.log(newBookArr)
    this.setState({
      showUpdate: true,
      index: idx,
      bookName: newBookArr[0].name,
      description: newBookArr[0].description,
      status: newBookArr[0].status,
    })
  }
  hideUpdateModel = () => {
    this.setState({ showUpdate: false })
  }
  update = (da) => {
    this.setState({ data: da.data })
    // console.log(this.state.data)
  }
  updateBookName = (e) => this.setState({ bookName: e.target.value });
  updateBookDescription = (e) => this.setState({ description: e.target.value });
  updateBookStatus = (e) => this.setState({ status: e.target.value });

  addBook = async (e) => {
    e.preventDefault();

    const bodyData = {
      bookName: this.state.bookName,
      description: this.state.description,
      status: this.state.status,
      email: this.props.auth0.user.email
    }
    const newBook = await axios.post(`${process.env.REACT_APP_MONGODB}`, bodyData);

    this.setState({
      data: newBook.data
    })
  }
  deleteBook = async (index) => {
    console.log(index);
    const newArrayOfBooks = this.state.data.filter((book, idx) => {
      return idx !== index;
    });

    console.log(newArrayOfBooks);
    this.setState({
      data: newArrayOfBooks
    });

    const query = {
      email: this.props.auth0.user.email
    }

    await axios.delete(`${process.env.REACT_APP_MONGODB}/${index}`, { params: query })

  }
updateBook= async (e)=>{
  e.preventDefault();
  const reqBody = {
    bookName: this.state.bookName,
    description: this.state.description,
    status: this.state.status,
    email: this.props.auth0.user.email
  }
  const updateBook = await axios.put(`${process.env.REACT_APP_MONGODB}/${this.state.index}`, reqBody);
  // console.log(updateBook);
  // console.log(updateBook.body);
  // console.log(updateBook.data);
  this.setState({
    data: updateBook.data
  });
}
  render() {
    const { isAuthenticated } = this.props.auth0
    // console.log('app', this.props);

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <><BestBooks showUpdateModel={this.showUpdateModel} auth0={this.props.auth0} update={this.update} data={this.state.data} delete={this.deleteBook} />
                  {this.state.showUpdate ?
                    <UpdateFormModel
                      updateBook={this.updateBook}
                      updateBookName={this.updateBookName}
                      updateBookDescription={this.updateBookDescription}
                      updateBookStatus={this.updateBookStatus}
                      hideUpdateModel={this.hideUpdateModel}
                      bookName={this.state.bookName}
                      description={this.state.description}
                      status={this.state.status} />
                    : <BookFormModal

                      addBook={this.addBook}
                      updateBookName={this.updateBookName}
                      updateBookDescription={this.updateBookDescription}
                      updateBookStatus={this.updateBookStatus}
                    />}
                </> : <Login />}


                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/profile">
                <Profile />
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
