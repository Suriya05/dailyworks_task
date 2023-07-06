import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
const UsersList = () => {
  const users = useSelector((state) => {
    return state.users.users}
  );

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => 
          <>
            <tr className="text-center" key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </>
          )}
          
        </tbody>
      </Table>
    </>
  );
};

export default UsersList;
