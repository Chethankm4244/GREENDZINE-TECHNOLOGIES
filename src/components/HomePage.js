import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [users, setUsers] = useState({});
  const [udata, setUdata] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const fetchUserData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    setUdata(users.data);
  }, [users.data]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchUserData();
    if (
      firstName === "Michael" &&
      "Lindsay" &&
      "Tobias" &&
      "Byron" &&
      "George" &&
      "Rachel"
    )
      setMessage("");
    
    else setMessage("First name does not match");
  };


  return (
    <div>
      {udata?.map((user) => {
        console.log("user.firstName", user?.firstName);
        console.log("firstName", firstName);
        return user.first_name === firstName ? (
          <div key={user.id} className="container">
            <img src={user.avatar} alt="" />
            <p className="id"> {user.id}</p>
            <div className="name1">
              <span className="name"> {user.first_name}</span>
              <span className="name">{user.last_name} </span>
            </div>
          </div>
        ) : (
          ""
        );
      })}

      <div>
        <form onSubmit={handleClick} className="form">
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="Search by first name"
            onChange={handleChange}
          />
          <p>{message}</p>
          
        </form>
      </div>
    </div>
  );
};

export default HomePage;
