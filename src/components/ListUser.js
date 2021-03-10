import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const ListUser = () => {
  const { user, editUser, deleteUser } = useContext(GlobalContext);
  return (
    <Fragment>
      <div className="userlist">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>User Data</h3>
            </div>
            <div className="col-md-4 text-right">
              <Link to="/create">
                <button type="button" className="btn btn-primary">
                  Create New User
                </button>
              </Link>
            </div>

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
                            onClick={() => editUser(user.id)}
                            type="button"
                            className="btn btn-primary mr-5"
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
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
        </div>
      </div>
    </Fragment>
  );
};
