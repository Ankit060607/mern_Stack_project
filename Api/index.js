import express from 'express';
import userroutes from"./routes/userroutes.js";
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://8077151685ankit:ankit321@mern.yvj3f5s.mongodb.net/mern?retryWrites=true&w=majority').then(
    () =>{
        console.log("mongodb is connected");
    }).catch((err) =>{
        console.log(err);
    });
const app = express();

app.listen(3000, ()=>{
    console.log("server run port 3000 !!");
});

app.use('/Api/user',userroutes);