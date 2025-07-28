import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <div>Password is :- {user.password}</div>
    </div>
  );
}

export default Profile;
