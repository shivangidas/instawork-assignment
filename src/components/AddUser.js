import React, { Component } from "react";
import { connect } from "react-redux";
import { showModal, hideModal } from "../actions/modalAction";
import { addUser } from "../actions/userAction";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

class AddUser extends Component {
  handleSubmitClick = event => {
    event.preventDefault();
    let { role } = this.refs.addUserForm;
    let postData = {
      id: this.props.users.userList.length + 1,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      role: role.value
    };
    this.props.addUser(postData);
    this.props.hideModal();
  };
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add a Team Member
            <br />
            <label className="text-muted" style={{ fontSize: "60%" }}>
              Set email, location and role
            </label>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form ref="addUserForm">
            <Form.Group controlId="first_name">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                ref="first_name"
                required
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Doe" ref="last_name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="sample@example.com"
                ref="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="+1234567890"
                ref="phone"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Regular - Can't delete members"
                name="role"
                defaultChecked
                value="regular"
              />
              <Form.Check
                type="radio"
                label="Admin - Can delete members"
                name="role"
                value="admin"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={this.handleSubmitClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
AddUser.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    show: state.show.show,
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { showModal, hideModal, addUser }
)(AddUser);
