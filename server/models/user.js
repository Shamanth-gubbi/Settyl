const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        trim:true,
        validate:{
            validator: function(value){
                const re= "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
                return value.match(re);
            },
            message: props => `${props.value} is not a valid email address`,
        },
    },
    password:{
        required:true,
        type:String,
        
    },
    address:{
        
        type:String,
        default:'',

    },
    type:{
        type:String,
        default:'user',
    }
});
const User=mongoose.model('User',userSchema);
module.exports=User;