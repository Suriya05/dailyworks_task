import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import {login} from "../slices/usersSlice";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const users = useSelector((state) => {
        return state.users.users}
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const userExist = users.find((user) => user.email === email && user.password === password);
        const userEmailExist = users.find((user) => user.email === email);
        if(userExist){
            dispatch( 
                login(userExist)
            );
            toast.success('Logged in successfully', {
                position: toast.POSITION.TOP_RIGHT
            });
            setEmail("");
            setPassword("");
            setTimeout(() => navigate("/home"), 1000);

        }
        else if(!userEmailExist){
            toast.error('Email id does not exist', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else{
            toast.error('Password is incorrect', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
       
        
    }
    


  return (
    <>
    <Header />
    <Container>
      <ToastContainer />
      <Row className="justify-content-center my-4">
        <Col lg="6">
        <h2>Login</h2>
        <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <div>
                <Button variant="secondary" type="submit" onClick={(e) =>handleSubmit(e)}>
                    Submit
                </Button>
            </div>
        </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Register;
