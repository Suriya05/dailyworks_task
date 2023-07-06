import React from "react";
import Header from "./Header";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import UsersList from "./UsersList";

const Home = () => {
  return (
    <>
    <Header />
    <Container className="my-4">
      <h1 className="text-center text-secondary">Users</h1>
      <Row className="justify-content-center">
        <Col lg="6">
          <UsersList/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Home;
