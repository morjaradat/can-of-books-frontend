import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import codebook from './asstes/image/howToCode.jpg'

class MyFavoriteBooks extends React.Component {
  async componentDidMount() {
    try {
      const booksUrl = `${process.env.REACT_APP_MONGODB}?email=${this.props.auth0.user.email}`;
      // console.log(this.props.auth0.user.email)
      let booksData = await axios.get(booksUrl)
      this.props.update(booksData)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className='cardcontainer'>
        <Carousel>
          {this.props.data.map(i => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={codebook}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Book Name :{i.name}</h3>
                  <p>description :{i.description}</p>
                  <p>status :{i.status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default MyFavoriteBooks;
