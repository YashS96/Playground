import catelog1 from '../model/catelog1.js'

export const getcatelog1= async (req,res)=>{

   try{
    //run qurey on DB table via DAL provided by model
    //const data = await model_name.find()
   }
   catch(err){
       console.log(err);
       res.status(500).send('My bad, sry!!')
   }
}





