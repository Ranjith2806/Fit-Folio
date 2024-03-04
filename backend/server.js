// const bodyParser = require('body-parser');
const cors = require('cors');
const express = require ('express');
const mongoose = require('mongoose');



require('dotenv').config();

const app = express();




app.use(cors());
app.use(express.json());


const uri = process.env.MONGO_URI

mongoose.connect(uri, {useNewUrlParser:true , useCreateIndex: true})

const connection = mongoose.connection;


connection.once('open',() => {
    console.log("MongoDB database connection established");
})


const userRoutes = require('./routes/users');
const exceriseRoutes = require('./routes/exercises');


app.use('/users',userRoutes);
app.use('/exercises', exceriseRoutes);

app.get("/health",(req, res) => {
    res.send("Health check");
});

const port = process.env.PORT || 3000;


app.listen(port,() => {
  
    console.log(`Server is running on the: ${port}`);
})