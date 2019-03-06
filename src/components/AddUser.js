import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "./UserForm";
import { showModal, hideModal } from "../actions/modalAction";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

class AddUser extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Team Member</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <UserForm />
        </Modal.Body>
      </Modal>
    );
  }
}
AddUser.propTypes = {
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
)(AddUser);
