import mongoose from 'mongoose'

export const connection=async ()=>{
    const connectionString=`mongodb://localhost:27017`;
    try{

        await mongoose.connect(connectionString,{useNewUrlParser : true});
        console.log(`DB connected Boi!!`)

    }
    catch(err){
        
        console.log(`Oops! DB connection failed!!`)
    }
    finally{
        
        console.log(`Connection process done!!`)
    }
}

// connection();