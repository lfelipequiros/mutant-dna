 import express from 'express';
 import MutantMessage from '../models/mutantMessage.js';

 const router = express.Router();

 //Since we are going to handle JUST 1 endpoint I'll not create a controllers folder/files for this functions
 //it's always a good practice, but I want to keep it simple for now : )
 router.get('/', getController);
 router.post('/', postController)

 async function getController(req, res) {
   console.log('Mutant GET Invoked')
   try {
      //Getting stuff is an async process so we need to await
      const mutantRecords = await MutantMessage.find();
      console.log(mutantRecords);
      res.status(200).json(mutantRecords);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
 }

 async function postController(req, res) {
   const mutant = req.body;
   console.log('Mutant POST Invoked with', mutant);
   const newMutant = new MutantMessage(mutant);
   try {
            //same here to store new records
      await newMutant.save();
      res.status(201).json(newMutant);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
 }

 export default router;