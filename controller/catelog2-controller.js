import catelog2 from '../model/catelog2.js'

export const getcatelog2= async (req,res)=>{

   try{
    //run qurey on DB table via DAL provided by model
    //const data = await model_name.find()
   }
   catch(err){
       console.log(err);
       res.status(500).send('My bad, sry!!')
   }
}
