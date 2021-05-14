 import express from 'express';
 import MutantMessage from '../models/mutantMessage.js';
 import isMutant from '../dna-analysis/index.js';

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
    //get request data
   const mutant = req.body;

   //something to make a quick and dirty benchmark
   let initTime = new Date();

   //Trigger out logic to check dna sequence
   mutant.result = isMutant(mutant.dnaSequence);

   //log the benchmark
   let endDate = new Date();
   console.log("server benchmark time:", endDate-initTime, "is mutant: ", mutant.result);

   //create the MutantMessage that will be stored
   const newMutant = new MutantMessage(mutant);
   try {
      //same here to store new records
      await newMutant.save();
      //await Promise.resolve();
      res.status(201).json(newMutant);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
 }

 export default router;