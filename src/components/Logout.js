import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {logout} from "../slices/usersSlice";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate(`/login`);
    })
    return (
        <>
        <h2>Logging out...</h2>
        </>
    )
}

export default Logout;