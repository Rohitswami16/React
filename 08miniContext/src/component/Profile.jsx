import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>Please log in to view your profile.</h2>;
  }

  <div>
    <h1>Profile</h1>
    <p>Username: {user.username}</p>
    <p>Password: {user.password}</p>
  </div>
}

export default Profile;
