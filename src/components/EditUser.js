import React, { Component } from "react";
import { connect } from "react-redux";
import { showEditModal, hideEditModal } from "../actions/modalAction";
import { editUser, deleteUser } from "../actions/userAction";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

class EditUser extends Component {
  handleSubmitClick = event => {
    event.preventDefault();
    let { role } = this.refs.editUserForm;
    let postData = {
      id: this.props.user.id,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      role: role.value
    };
    this.props.editUser(postData, postData.id);
    this.props.hideEditModal();
  };
  handleDeleteClick = event => {
    event.preventDefault();
    console.log("in delete click");
    this.props.deleteUser(this.props.user.id);
    this.props.hideEditModal();
  };
  render() {
    const { user } = this.props;
    return (
      <Modal show={this.props.showEdit} onHide={this.props.hideEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit {user.first_name}'s Details
            <br />
            <label className="text-muted" style={{ fontSize: "60%" }}>
              Set email, location and role
            </label>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form ref="editUserForm">
            <Form.Group controlId="first_name">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John"
                ref="first_name"
                // value={this.props.user.first_name}
                required
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Doe"
                ref="last_name"
                // value={this.props.user.last_name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="sample@example.com"
                ref="email"
                // value={this.props.user.email}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="+1234567890"
                // value={this.props.user.phone}
                ref="phone"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Regular - Can't delete members"
                name="role"
                value="regular"
                // checked={this.props.role === "regular"}
                // onChange={this.handleOptionChange}
              />
              <Form.Check
                type="radio"
                label="Admin - Can delete members"
                name="role"
                value="admin"
                // checked={this.props.role === "admin"}
                // onChange={this.handleOptionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {this.props.user.role === "admin" ? (
            <Button variant="outline-danger" onClick={this.handleDeleteClick}>
              Delete
            </Button>
          ) : (
            ""
          )}
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
EditUser.propTypes = {
  showEditModal: PropTypes.func.isRequired,
  hideEditModal: PropTypes.func.isRequired,
  showEdit: PropTypes.bool.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    showEdit: state.show.showEdit,
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { showEditModal, hideEditModal, editUser, deleteUser }
)(EditUser);
