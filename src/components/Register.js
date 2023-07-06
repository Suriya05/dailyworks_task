import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
    const [name, setName ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const users = useSelector((state) => {
        return state.users.users}
    );

    const dispatch = useDispatch();
    const {
        register: formRegister,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const registerOptions = {
    name: { required: "Name is required", pattern: /[A-Za-z]/ },
    email: { required: "Email is required", pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ },
    password: {
        required: "Password is required",
        minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
        }
    }
    };

    const onSubmit = () => {
        const userExist = users.find((user) => user.email === email);
        const validation = name && email && password;
        console.log(name, email, password)
        if(!validation){
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
        reset();
        setName('');
        setEmail('');
        setPassword('');
    }


  return (
    <>
    <Header />
    <Container>
      <ToastContainer />
      <Row className="justify-content-center my-4">
        <Col lg="6">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2">
                <label>Name</label>
                <input
                    type="text" placeholder="Name" className="form-control"
                    {...formRegister("name", registerOptions.name)}
                    onChange={(e) => setName(e.target.value)}

                />
                {errors.name && (
                    <p className="errorMsg">{errors.name.message}</p>
                )}
            </div>

            <div className="py-2">
                <label>Email</label>
                <input
                    type="text" placeholder="Email" className="form-control"
                    {...formRegister("email", registerOptions.email)}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && errors.email.type === "required" && (
                    <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                    <p className="errorMsg">Email is not valid.</p>
                )}
            </div>

            <div className="py-2">
                <label>Password</label>
                <input
                    type="text" placeholder="Password" className="form-control"
                    {...formRegister("password", registerOptions.password)}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                    <p className="errorMsg">{errors.password.message}</p>
                )}
            </div>

            <div className="my-2">
                <Button variant="secondary" type="submit">
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
