import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { showModal, hideModal } from "../actions/modalAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UserForm extends Component {
  render() {
    return (
      <Form>
        <input type="hidden" id="id" value={this.props.userId} ref="id" />
        <Form.Group controlId="first_name">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>
        <Form.Group controlId="last_name">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Doe" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="sample@example.com" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="+1234567890" />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Regular - Can't delete members"
            name="role"
            value="regular"
            defaultChecked
          />
          <Form.Check
            type="radio"
            label="Admin - Can delete members"
            name="role"
            value="admin"
          />
        </Form.Group>
      </Form>
    );
  }
}
UserForm.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  users: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    show: state.show.show,
    users: state.users.userList
  };
};
export default connect(
  mapStateToProps,
  { showModal, hideModal }
)(UserForm);
