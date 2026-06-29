const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://aesyaak_db_user:KXI5g2KdCMf1DG3p@cluster0.lhlcheu.mongodb.net/outproDB?appName=Cluster0')
.then(()=> console.log ("Mongodb connected"))
.catch((err)=> console.log("Mongodb error:",err))

const ServiceSchema = new
mongoose.Schema({
    title:String,
    description: String,
    icon:String
})

const Service = mongoose.model("Service", ServiceSchema);

const ProjectSchema = new
mongoose.Schema({
    title: String,
    description:String,
    image:String
})

const Project = mongoose.model("Project",ProjectSchema);

const ContactSchema = new
mongoose.Schema({
    name: String,
    email:String,
    message:String
})

const Contact = mongoose.model("Contact", ContactSchema);

app.get("/", (req,res)=>{
    res.send("API Running!")
})

app.get("/api/services", async(req,res)=>{
    const data = await Service.find();
    res.json(data);
})

app.post("/api/services", async(req,res)=>{
    const data = new Service(req.body);
    await data.save();
    res.json(data);

})

app.get("/api/projects", async(req,res)=>{
    const data = await Project.find();
    res.json(data);
})

app.post("/api/projects", async(req,res)=>{
    const data = new Project(req.body);
    await data.save();
    res.json(data);
})

app.post("/api/contact", async(req,res)=>{
    const data = new Contact(req.body);
    await data.save();
    res.json({
        message:"Message recieved successfully."
    });
})

app.listen(8000, ()=>{
    console.log('Server running on port 8000 http://localhost:8000')
})