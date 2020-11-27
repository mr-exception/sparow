import React, { useState } from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import TextInput from "ui-kit/TextInput";
import Styles from "./Login.module.scss";
import { FaGoogle, FaGithub, FaTwitter, FaUser, FaLock } from "react-icons/fa";
const Component = () => {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  return (
    <Row align="center" verticalAlign="center">
      <Col lg={4} md={6} sm={8} xs={12}>
        <Space height="10vh" />
        <Row>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Image
              source="/logo192.png"
              alt="logo"
              className={Styles.applicationImage}
            />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Image
              source="/logo192.png"
              alt="logo"
              className={Styles.applicationImage}
            />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            sparow
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            application name
          </Col>
        </Row>
        <Space height="5vh" />
        <Card>
          <Card.Header>
            <Row align="start">
              <Col
                col={12}
                style={{
                  paddingLeft: 15,

                  height: 50,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Login to Sparow
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row align="start">
              <Col col={12}>
                <TextInput
                  value={username}
                  onChange={set_username}
                  label="username"
                  icon={<FaUser />}
                  type="text"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={password}
                  onChange={set_password}
                  label="password"
                  icon={<FaLock />}
                  type="password"
                />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row style={{ marginTop: 15 }}>
              <Col lg={8} md={8} sm={12} xs={12}>
                <Row align="start">
                  <Col col={12}>
                    <Button>
                      <FaGoogle />
                    </Button>
                    <Button>
                      <FaGithub />
                    </Button>
                    <Button>
                      <FaTwitter />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Row align="end">
                  <Col col={12}>
                    <Button>login</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default Component;
