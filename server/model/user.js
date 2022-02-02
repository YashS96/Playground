import mongoose from 'mongoose'

const Schema=new mongoose.Schema({
    // userid:{
    //     type : Number,
    //     required : true
    // },
    username:{
        type : String,
        unique : true,
        required : true
    },
    password :{
        trype: String,
        required : true
    },
    email:{
        type : String,
        unique : true,
        required : true
    },
    mobile:{       
        type: Object,
        required: true
    },
    address :{
        type : Object,
        required : false
    }, 
    dob : {
        type: Date,
        default: Date.now,
        required : true
    }
});


//mongoose.model(<Collectionname>, <CollectionSchema>)
const User=mongoose.model('Users',Schema);

export default User;