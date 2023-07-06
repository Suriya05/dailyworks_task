import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Header from "./Header";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import UsersList from "./UsersList";

const Home = () => {
  const currentUser = useSelector((state) => {
    return state.users.currentUser}
  );
  const loggedin = useSelector((state) => {
    return state.users.loggedin}
  );

  const navigate = useNavigate();

  useEffect(()=>{
    if(!loggedin){
      navigate("/login")
    }
  }, [loggedin]);
  

  return (
    <>
    <Header />
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col lg="6">
          <h2>Hi {currentUser.name?? ''}</h2>
          <p>Your email is {currentUser.email ?? ''}</p>
        </Col>
      </Row>
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
