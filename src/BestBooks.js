import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import codebook from './asstes/image/howToCode.jpg'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
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
        <CardDeck>
        {this.props.data.map((i, idx) => {
          return (
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={codebook} />
              <Card.Body>
                <Card.Title>Book Name :{i.name}</Card.Title>
                <Card.Text>
                  description :{i.description}
                </Card.Text>
                <Card.Text>
                  status :{i.status}
                </Card.Text>
                <Button onClick={()=>this.props.delete(idx)}>Delete</Button>
                <Button onClick={()=>this.props.showUpdateModel(idx)}>Update</Button>
              </Card.Body>
            </Card>
            
          )
        })}
        </CardDeck>
      </div>
    )

  }
}

export default MyFavoriteBooks;
