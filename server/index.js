import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//own imports
import dnaAnalyzerRoutes from './routes/dnaAnalyzer.js'; 

const app = express(); 

//bodyParser constructor is deprecated so using json directly instead
//We can use it to get some middlewares working for the json we need to handle
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true}));
//and well, the old one
app.use(cors());

// Set our route to mutant router
app.use('/mutant', dnaAnalyzerRoutes);

// Yeah #security but I think we can YOLO it for a while
const URL = "mongodb+srv://felipequiros:1q2w3e4r5@cluster0.fssgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// default PROT to 5000 or getting it from the container
const PORT = process.env.PORT || 5000;

//connect to DB, and well not required flags but handy to avoid warnings and errors ;) 
mongoose.connect(URL, { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`Server running on PORT: ${PORT}`))) 
    .catch((error) => console.log(error.message));

//same thing handy to avoid warns and errors for now
//mongoose.set("useFindAndModify", false);