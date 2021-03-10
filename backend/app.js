const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require("body-parser");
// const db = require("./models");

app.use(cors())

const port = 5000

// db.sequelize.sync();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = [
    {
        id: '1',
        nama: 'Abdul Latif',
        alamat: 'semarang',
        nohp : '0812322323',
        email : 'abdul@mail.com',
        password: '12345',
        foto: 'abdul.jpg'
    },
    {
        id: '2',
        nama: 'Ahda reza',
        alamat: 'semarang',
        nohp : '0812322323',
        email : 'ahda@mail.com',
        password: '12345',
        foto: 'ahda.jpg'
    },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Get all user
app.get("/api/user/", (req, res) => {
    res.status(200).json(data);
});

//Create new user
app.post('/api/user/', (req, res) => {
    const newUser = {
        id: data.length + 1,
        nama: req.body.nama,
        alamat: req.body.alamat,
        noHp: req.body.noHp,
        email : req.body.email,
        password: req.body.password,
        foto: req.body.foto,

    };
    data.push(newUser);
    res.send(newUser)
})
app.put('/api/user:id', (req,res) => {
    const user = data.find(a => a.id === parseInt(req.params.id))
    if(!user) return res.status(404).send("User tidak ditemukan")

    user.nama = req.body.nama
    user.alamat= req.body.alamat
    user.noHp= req.body.noHp
    user.email = req.body.email
    user.password= req.body.password
    user.foto= req.body.foto
    res.send(user)
})
//Delete user
app.delete('/api/user/:id', (req, res) => {
    const findUser = data.find(a => a.id === parseInt(req.params.id))
    if (!findUser) return res.status(404).send("User tidak ditemukan")

    const index = data.indexOf(findUser);
    data.splice(index, 1);

    res.send(findUser)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})