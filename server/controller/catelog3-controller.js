//import model_name from '../model/model_name.js'

import catelog3 from '../model/catelog3.js'

export const getcatelog3= async (req,res)=>{

   try{
    //run qurey on DB table via DAL provided by model
    //const data = await model_name.find()
   }
   catch(err){
       console.log(err);
       res.status(500).send('My bad, sry!!')
   }
}
