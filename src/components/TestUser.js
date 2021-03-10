import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function TestUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((res) => {
        const userData = res.data;
        setUser(userData);
        console.log(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = () => {
      
  }
  return (
    <div>
        <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Email</th>
                  <th scope="col">Control</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>
                      <div
                        className="btn-group "
                        role="group"
                        aria-label="Basic example"
                      >
                        <Link to={`/edit/${user.id}`}>
                          <button
                            // onClick={() => editUser(user.id)}
                            type="button"
                            className="btn btn-primary mr-5"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                        //   onClick={() => deleteUser(user.id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
      
    </div>
  );
}
