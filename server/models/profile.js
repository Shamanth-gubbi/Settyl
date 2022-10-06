const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    
    name:{
        required:true,
        type:String,

    },
    email:{
        required:true,
        type:String,
    },
    address:{
        type:String,
        default:'',
    }
});
module.exports=mongoose.model('Profile',profileSchema);
