const express = require('express');
 const User=require('../models/user');
 const bcrypt=require('bcryptjs');
const authRouter = express.Router();
const jwt=require('jsonwebtoken');
authRouter.post('/api/signup', async (req, res) => {
  try{
    const {name, email, password } = req.body;
    
    const extingUser = await User.findOne({ email });
    if(extingUser){
        return res.status(400).send({ message: 'User already exists' });
    }
     hashedPassword=await bcrypt.hash(password, 8);
    let user=new User({
        name,
        email,
        password:hashedPassword,
    })
    user=await user.save();
    res.json(user);
  }
  catch(err){
    res.status(500).send({ message: err.message });
  }
    
    
});

authRouter.post('/api/signin', async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).send({ message: 'User does not exist' });
    }
    const isMatch=await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).send({ message: 'Invalid password' });
    }
    res.json(user);
    const token=jwt.sign({id:user._id},"password");
    res.json({token,...user._doc});
  }
  catch(err){
    res.status(500).send({ message: err.message });
  }
    
    
});

module.exports = authRouter;