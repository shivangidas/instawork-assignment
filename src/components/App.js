import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userAction";
import { showModal } from "../actions/modalAction";
import { Button, Container, Row, Col } from "react-bootstrap";
import UserGrid from "./UserGrid";
import AddUser from "./AddUser";
class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <Container className="App">
        <Row className="justify-content-md-center">
          <Col xs={{ span: 2, offset: 10 }}>
            <Button variant="primary" onClick={this.props.showModal}>
              Add
            </Button>
          </Col>
          <header>
            <h1>Team List</h1>
            <span className="mute">
              You have {this.props.users.length} team members
            </span>
          </header>
        </Row>
        <UserGrid />
        <AddUser show={this.props.show} onHide={this.props.hideModal} />
      </Container>
    );
  }
}

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    users: state.users.userList,
    show: state.show.show
  };
};
export default connect(
  mapStateToProps,
  { fetchUsers, showModal }
)(App);
