import React from "react";
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div>
      <article onClick={() => navigate(`/userDetail/${user._id}`)} style={{ cursor: "pointer" }}>
        <div>
          <span>Name: {user.name}</span>
          <span>Email: {user.email}</span>
        </div>
        <div></div>
      </article>
    </div>
  );
}

export default UserCard;
