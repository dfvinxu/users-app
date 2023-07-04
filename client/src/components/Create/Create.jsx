import React, { useState, useEffect } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      registrationDate: new Date().toISOString(),
    };

    try {
      const response = await axios.post("http://localhost:3000/api/users/create", newUser);
      console.log("Usuario creado exitosamente");
      setNewUser(response.data);
    } catch (error) {
      console.error(error);
    }

    setName("");
    setEmail("");
  };

  return (
    <div>
      <h3>Creación de usuario</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>

      {newUser && (
        <div>
          <h3>Usuario creado:</h3>
          <p>{newUser.name} - {newUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default Create;

