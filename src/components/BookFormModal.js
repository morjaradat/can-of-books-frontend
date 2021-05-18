import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class BookFormModal extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.props.addBook(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Book Name" onChange={(e) => this.props.updateBookName(e)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Descripton</Form.Label>
            <Form.Control type="text" placeholder="Descripton" onChange={(e) => this.props.updateBookDescription(e)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Status" onChange={(e) => this.props.updateBookStatus(e)} />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form>
      </div>
    )
  }
}

export default BookFormModal
