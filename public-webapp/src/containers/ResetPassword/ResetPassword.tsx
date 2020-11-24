import React, { useState } from "react";
import Button from "ui-kit/Botton";
import Card from "ui-kit/Card";
import Col from "ui-kit/Col";
import Image from "ui-kit/Image";
import Row from "ui-kit/Row";
import Space from "ui-kit/Space";
import TextInput from "ui-kit/TextInput";
import CheckInput from "ui-kit/CheckInput";
import Styles from "./ResetPassword.module.scss";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const ResetPassword = () => {
  const [email, set_email] = useState<string>("");
  const [phone, set_phone] = useState<string>("");
  const [method, set_method] = useState<"email" | "phone">("email");
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
                }}
              >
                <h3>
                  <b>Reset Password</b>
                </h3>
                <h5>
                  enter your email or phone number to get a verification message
                  from sparow
                </h5>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row align="start">
              <Col col={12}>
                <CheckInput
                  name="method"
                  checked={method === "email"}
                  value="email"
                  onChange={(value) => {
                    set_method(value as "email" | "phone");
                  }}
                  label="send message to my email address"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={email}
                  onChange={set_email}
                  label="email address"
                  disabled={method !== "email"}
                  icon={<GrMail />}
                />
              </Col>
              <Col col={12}>
                <CheckInput
                  name="method"
                  checked={method === "phone"}
                  value="phone"
                  onChange={(value) => {
                    set_method(value as "email" | "phone");
                  }}
                  label="send message to my phone number"
                />
              </Col>
              <Col col={12}>
                <TextInput
                  value={phone}
                  onChange={set_phone}
                  label="phone number"
                  disabled={method !== "phone"}
                  icon={<FaPhone />}
                />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row style={{ marginTop: 15 }} align="end">
              <Col col={12}>
                <Button>submit</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default ResetPassword;
