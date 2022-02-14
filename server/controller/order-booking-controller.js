import orders from '../model/orders.js'

export const bookOrder=async(req,res)=>{

    try{
        //appropriate call to DB collection
    }
    catch(err){
        console.log(err)
        res.status(500).send('My bad, bruh!');
    }
}