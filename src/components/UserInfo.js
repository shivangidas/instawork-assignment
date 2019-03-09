import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import placeholder from "../placeholder.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideEditModal, showEditModal } from "../actions/modalAction";
import EditUser from "./EditUser";
class UserInfo extends Component {
  handleEditClick = event => {
    this.props.showEditModal(this.props.user);
  };
  render() {
    const { user } = this.props;
    return (
      <>
        <Col xs={12} md={6} lg={4} style={{ marginBottom: "2%" }}>
          <Card>
            <Card.Img variant="top" src={placeholder} height="100px" />
            <Card.Body>
              <Card.Title>
                {user.first_name} {user.last_name}{" "}
                <span className="muted">
                  {user.role === "admin" ? "(" + user.role + ")" : ""}
                </span>
              </Card.Title>
              <Card.Text>
                <span>{user.phone}</span>
                <br />
                <span>{user.email}</span>
              </Card.Text>
              <Button variant="outline-primary" onClick={this.handleEditClick}>
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
UserInfo.propTypes = {
  hideEditModal: PropTypes.func.isRequired,
  showEdit: PropTypes.bool.isRequired,
  showEditModal: PropTypes.func.isRequired,
  editedUser: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    showEdit: state.show.showEdit,
    editedUser: state.show.editedUser
  };
};
export default connect(
  mapStateToProps,
  { hideEditModal, showEditModal }
)(UserInfo);
