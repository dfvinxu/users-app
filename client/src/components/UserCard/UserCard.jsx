import React from "react";
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {


  return (
    <div>
      <article>
        <div>
          <span>Name: {user.name}</span>
          </div>
          <div>
          <span>Email: {user.email}</span>
          </div>
          <div>
          <span>Fecha de registro {user.registrationDate}</span>
          </div>
          
        
      
      </article>
    </div>
  );
}

export default UserCard;