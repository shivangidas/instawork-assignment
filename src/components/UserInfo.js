import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import placeholder from "../placeholder.png";
class UserInfo extends Component {
  render() {
    const { user, i } = this.props;
    return (
      <Col xs={12} md={6} lg={4}>
        <Card>
          <Card.Img variant="top" src={placeholder} height="100px" />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <div>{user.phone}</div>
              <div>{user.email}</div>
            </Card.Text>
            <Button variant="outline-primary">Edit</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default UserInfo;
