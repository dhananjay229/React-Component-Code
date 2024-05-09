"use client";
import React, { useState } from "react";

const FormVal = () => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errordata, setErrorData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if(!formdata.username){
      errors.username = "Enter the username";
    }

    if(!formdata.email){
      errors.email = "enter the Email";
    }
    else if(!/\S+@\S+\.\S+/.test(formdata.email)){
      errors.email = "enter the correct email";
    }

    if(!formdata.password){
      errors.password = "enter the correct password";
    }
    else if(formdata.password.length < 6){
      errors.password = "password must be greater than 6"
    }
    
    if(Object.keys(errors).length === 0){
      console.log(formdata);
    }
    else{
      setErrorData(errors)
    }
  }

  return (
    <>
      <h1> Form Validation </h1>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row m-2">
            <h1>Username : </h1>
            <input
              type="username"
              name="username"
              className="ml-4 border-2"
              placeholder="Enter the username"
              value={formdata.username}
              onChange={handleChange}
            />
            {errordata.username && <span>{errordata.username}</span>}
          </div>
          <div className="flex flex-row m-2">
            <h1>Email : </h1>
            <input
              type="email"
              name="email"
              className="ml-4 border-2"
              placeholder="Enter the Email"
              value={formdata.email}
              onChange={handleChange}
            />
            {errordata.email && <span>{errordata.email}</span>}
          </div>
          <div className="flex flex-row m-2">
            <h1>Password : </h1>
            <input
              type="password"
              name="password"
              className="ml-4 border-2"
              placeholder="Enter the Password"
              value={formdata.password}
              onChange={handleChange}
            />
            {errordata.password && <span>{errordata.password}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormVal;



