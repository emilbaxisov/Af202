const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const {Schema} = mongoose
const userScheme = new mongoose.Schema({
    imgUrl:{type:String, require:true},
    data:{type:String, required:true},
    data2:{type:String, required:true},
    
})
const port = 8000

const Users = mongoose.model("users",userScheme)
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  Users.find({},(err,docs)=>{
    if(!err){
        res.send(docs)
    }
  })
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    Users.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }
        }
    })
  })


  app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    Users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.send("DELETED");
      } 
    });
  });


  app.post("/users/", (req, res) => {
    let user = new Users({
      imgUrl: req.body.imgUrl,
      data: req.body.data,
      data2: req.body.data2,
      
    });
  
    user.save();
    res.send({ message: "SUCCESS" });
  });

mongoose.connect("mongodb+srv://tu74k8ckg:12345@cluster0.buc5fjp.mongodb.net/AF202son2?retryWrites=true&w=majority")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})