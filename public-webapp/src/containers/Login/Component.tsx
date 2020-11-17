import React from "react";
import Row from "ui-kit/Row/Component";
import Col from "ui-kit/Col/Component";

const Component = () => {
  return (
    <Row>
      <Col style={{ background: "blue" }} flex={2}>
        <Row>
          <Col>col1.1</Col>
        </Row>
        <Row>
          <Col>col1.2</Col>
        </Row>
      </Col>
      <Col style={{ background: "green" }}>col 2</Col>
    </Row>
  );
};

export default Component;
