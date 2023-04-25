const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const frontendUrl = process.env.FRONTEND_URL

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: frontendUrl,
    credentials: true,
    methods: ['GET', 'POST','PUT','DELETE']
}));

// routes
app.use('/api/auth', require('./routes/user'));

// start app
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log('app is running on port: '+port);
})