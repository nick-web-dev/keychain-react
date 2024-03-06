require('dotenv').config();
let express = require('express');
let app = express();
let massive = require('massive');
let ctrl = require('./controller');
const session = require('express-session');
const axios = require('axios');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, ACCOUNT_SID, AUTH_TOKEN} = process.env

// const accountSid = ACCOUNT_SID;
// const authToken = AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// bewlow: DigitalOcean middleware !
app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {rejectUnauthorized: false}
// })
// .then(db => {
//     app.set('db', db)
//     console.log('db connected !');   }).catch(err => console.log(err))
    
// .catch(err => console.log(err));
app.listen(SERVER_PORT, () => console.log(`Server Running on port ${SERVER_PORT} !`));