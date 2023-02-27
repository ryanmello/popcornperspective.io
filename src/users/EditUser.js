import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EdotUser() {
  let navigate = useNavigate()
  const {id} = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // call the load user method when the page loads
  useEffect(()=>{
    loadUser()
  }, [])


  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8084/users/${id}`, user)
    navigate("/");
  };

  // save the user with the current id and set it equal to the form fields
  const loadUser = async() => {
    const result = await axios.get(`http://localhost:8084/users/${id}`)
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="pb-3 text-center">
              <button type="submit" className="btn btn-outline-primary m-2">
                Submit
              </button>
              <Link className="btn btn-outline-danger" to={"/"}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
