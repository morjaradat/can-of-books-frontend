import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateFormModel extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.hideUpdateModel}>Cancel Update</Button>
                <Form onSubmit={(e) => this.props.updateBook(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Update Book Name</Form.Label>
                        <Form.Control type="text" value={this.props.bookName} onChange={(e) => this.props.updateBookName(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Descripton</Form.Label>
                        <Form.Control type="text"value={this.props.description} onChange={(e) => this.props.updateBookDescription(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" value={this.props.status} onChange={(e) => this.props.updateBookStatus(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update Book</Button>
                </Form>
            </div>
        )
    }
}

export default UpdateFormModel
