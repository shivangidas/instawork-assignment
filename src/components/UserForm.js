import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { showModal, hideModal } from "../actions/modalAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class UserForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={this.props.hideModal}>
          Save changes
        </Button>
      </Form>
    );
  }
}
UserForm.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    show: state.show.show
  };
};
export default connect(
  mapStateToProps,
  { showModal, hideModal }
)(UserForm);
