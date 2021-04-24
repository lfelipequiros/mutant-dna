import mongoose from 'mongoose';

//this is a handy schema to get our DB storage uniform and work with them easilly
 const mutantSchema = mongoose.Schema({
     dnaSequence: String,
     result: Boolean,
     createdTimestamp: {
         type: Date,
         default: new Date()
     }
 });

 //creating the model
 const MutantMessage = mongoose.model('MutantMessage', mutantSchema);

 export default MutantMessage;