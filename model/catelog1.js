import mongoose from 'mongoose'

const Schema=new mongoose.Schema({
    userid:{
        type : Number,
        required : true
    },
    username:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    // mobile:{         //nested elements arn't validated like this
    //     type: Array,
    //     required: true
    // },
    // address :{
    //     type : Array,
    //     required : false
    // }, 
    dob : {
        type: Date,
        default: Date.now,
        required : true
    }
});


//mongoose.model(<Collectionname>, <CollectionSchema>)
const catelog1=mongoose.model('Users',Schema);

export default catelog1;