const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2500;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("empty route")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	//const name=req.body.name,age=req.body.age
	const {name,password,select,radio}=req.body;
	console.log(name,password,select,radio)
	res.send("added")
})


app.listen(port,()=>console.log("server is running on port 2500"))