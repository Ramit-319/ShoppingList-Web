import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import { v4 as uuid } from 'uuid'

class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  } //changes name to the entered input

  onSubmit = (e) => {
    e.preventDefault();
    //To prevent the form to submit how it does by default
    const newItem = {
      id: uuid(),
      name: this.state.name
    }

    //Add item via addItem action
    this.props.addItem(newItem)

    //Close modal
    this.toggle();
  }

  render() {
    return(
      <div>
      <Button
        color="dark"
        style={{ marginBottom: '2rem' }}
        onClick={this.toggle}
      >Add Item</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={this.onChange}
                />
              <Button
                color="dark"
                style={{marginTop: "2rem"}}
                block
              >Add item</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);
