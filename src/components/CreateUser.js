import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

export const CreateUser = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [noHp, setNoHp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [foto, setFoto] = useState('');
    const {createUser, user} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit= e =>{
        e.preventDefault();
        const userNew ={
            id: user.length+1,
            nama,
            alamat,
            noHp,
            email,
            password,
            foto
        }
        createUser(userNew);
        history.push("/");
    }
    return (
        <Fragment>
            <div className="container Useredit">
                <h3>Create user</h3>
                <br />
                <br />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Nama</label>
                  <input type="text" className="form-control" id="nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Alamat</label>
                  <input type="text" className="form-control" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Nomor Hp</label>
                  <input type="text" className="form-control" id="noHp" value={noHp} onChange={(e) => setNoHp(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Email</label>
                  <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Foto</label>
                  <input type="text" className="form-control" id="foto" value={foto} onChange={(e) => setFoto(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Save user</button>
                <Link to='/'><button type="button" className="btn">Cancel</button></Link>
              </form>
            </div>
        </Fragment>
    )
}