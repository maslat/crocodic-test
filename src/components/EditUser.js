import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const EditUser = route => {
  let history = useHistory();
  const { user, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    nama: "",
    alamat: "",
    noHp: "",
    email: "",
    password: "",
    foto: ""
  });
  const currentUserId = route.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = user.find(x => x.id === parseInt(userId));
    setSelectedUser(selectedUser);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (userKey, val) =>
    setSelectedUser({ ...selectedUser, [userKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container">
        <h3>Edit Users</h3>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Nama</label>
            <input
              type="text"
              className="form-control"
              value={selectedUser.nama}
              onChange={e => handleOnChange("nama", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Alamat</label>
            <input
              type="text"
              className="form-control"
              value={selectedUser.alamat}
              onChange={e => handleOnChange("alamat", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Nomor Hp</label>
            <input
              type="text"
              className="form-control"
              value={selectedUser.noHp}
              onChange={e => handleOnChange("noHp", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email</label>
            <input
              type="text"
              className="form-control"
              value={selectedUser.email}
              onChange={e => handleOnChange("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Password</label>
            <input
              type="password"
              className="form-control"
              value={selectedUser.password}
              onChange={e => handleOnChange("password", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Foto</label>
            <input
              type="text"
              className="form-control"
              value={selectedUser.foto}
              onChange={e => handleOnChange("foto", e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save user
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};
