const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://coaxoda:8097xs42@cluster0.rtjcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        userCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à MONGODB réussie'))
    .catch(() => console.log("Connexion a MONGODB echouée"))

const app = express()
    
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes)

module.exports = app;