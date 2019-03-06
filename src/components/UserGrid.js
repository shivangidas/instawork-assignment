import React from "react";
import UserInfo from "../components/UserInfo";
import { Row, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userAction";
class UserGrid extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.users.map((user, i) => (
            <UserInfo {...this.props} key={i} i={i} user={user} />
          ))}
        </Row>
      </Container>
    );
  }
}
UserGrid.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    users: state.users.userList
  };
};
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserGrid);
