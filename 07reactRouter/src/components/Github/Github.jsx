import React, { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Rohitswami16")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-grey-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      
      
    </div>
  );
}

export default Github;
