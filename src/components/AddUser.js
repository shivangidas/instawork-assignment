import React, { Component } from "react";
import { connect } from "redux";
import UserForm from "./UserForm";
import { Modal, Button } from "react-bootstrap";
class AddUser extends Component {
  render() {
    return (
      <Modal.Dialog show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Team Member</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <UserForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
export default AddUser;
