import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard/UserCard";

function UsersDatabase() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Lista Usuarios registrados</h3>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
}

export default UsersDatabase;
