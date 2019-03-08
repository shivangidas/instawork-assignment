import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import placeholder from "../placeholder.png";
class UserInfo extends Component {
  render() {
    const { user, i } = this.props;
    return (
      <Col xs={12} md={6} lg={4} style={{ marginBottom: "2%" }}>
        <Card>
          <Card.Img variant="top" src={placeholder} height="100px" />
          <Card.Body>
            <Card.Title>
              {user.first_name} {user.last_name}{" "}
              <span className="muted">
                {user.role === "admin" ? user.role : ""}
              </span>
            </Card.Title>
            <Card.Text>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </Card.Text>
            <Button variant="outline-primary">Edit</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default UserInfo;
