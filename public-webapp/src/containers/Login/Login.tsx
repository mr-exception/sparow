import React, { useState } from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import TextInput from "ui-kit/TextInput";

const Component = () => {
  const [username, set_username] = useState("");
  return (
    <Row align="center">
      <Col col={6}>
        <Card>
          <Card.Header>header</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <TextInput
                  value={username}
                  onChange={set_username}
                  label="username"
                />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Button>login</Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
