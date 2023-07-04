import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export function UserDetail() {
  const { id } = useParams();
  const { getUser } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let newUser = await getUser(id);
        setUser(newUser);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [getUser, id]);

  return (
    <article>
      {user && (
        <div>
          <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Registration Date: {user.registrationDate}</p>
          </div>
        </div>
      )}
    </article>
  );
}
