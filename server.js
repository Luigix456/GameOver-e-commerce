require('dotenv').config()
const cors = require('cors')
const passport = require("passport")
const express = require('express')
const fileUpload = require('express-fileupload')
require('./config/database')

const Router = require ('./routes/routes')

const PORT = 4000
const app = express()

//middleware
app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);

app.listen(PORT, () => console.log('Server ready on PORT ' + PORT))
