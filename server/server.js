require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./authCtrl');


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());  // without this, no access to req.body
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB SET!')
    console.log(db.listTables())
    app.listen(SERVER_PORT,() => {
        console.log(`Magic is happening on ${SERVER_PORT}`)
    })
})


app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user-data', authCtrl.userData)
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/')
})



