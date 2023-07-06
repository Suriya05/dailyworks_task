import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import Header from "./Header";
import { register } from '../slices/usersSlice';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => {
        return state.users.users}
    );

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        checkValidation();
        const userExist = users.find((user) => user.email === email);
        if(!validated){
            toast.error('Please enter valid values for the fields', {
                position: toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        if(userExist){
            toast.error('User already exists', {
                position: toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        dispatch( 
            register(
            {
                id: uuidv4(),
                name, 
                email, 
                password                    
            }
            )
        );
        toast.success('User registered successfully', {
            position: toast.POSITION.TOP_RIGHT
        });
        setName('');
        setEmail('');
        setPassword('');
    }
    
    const checkValidation = () => {
        if(name && email && password){
            setValidated(true);
        }
    }


  return (
    <>
    <Header />
    <Container>
      <ToastContainer />
      <Row className="justify-content-center my-4">
        <Col lg="6">
        <h2>Register</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email}
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
