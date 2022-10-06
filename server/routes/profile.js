const express = require('express');
const router = express.Router();

const profile=require('./../models/profile');
router.get("/", async (req, res) => {  
    var Profile= await profile.find();
    res.json(profile);
 });
 router.get("/list/:userid", async (req, res) => {  
    var Profile= await profile.find({userid:req.params.name});
    res.json(Profile);
 });
 router.post("/add", async (req, res) => {  
    res.json(req.body);
    const newProfile = new profile({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
    });
    await newProfile.save();
    const response={message:"New profile added"};
    res.json(response);
 });
 module.exports = router;