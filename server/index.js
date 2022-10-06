const express = require('express');
const mongoose = require('mongoose');
// const profile = require('./routes/profile');
 const authRouter=require('./routes/auth');
const PORT=3000;
const app=express();
const profile=require('./models/profile');
const User = require('./models/user');
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
mongoose.connect('mongodb+srv://shamanthgm:ClientAndServer@cluster0.fhe8hti.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('connected to db')).catch((err)=>console.log(err));
app.use(authRouter);
app.listen(PORT,"0.0.0.0", () => {
    
    console.log(`Server listening on port ${PORT}`);
    app.use("/profile",profile);
    });