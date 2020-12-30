import express from 'express';
import bodyParser from 'body-parser';

var upvotes = {
    "learn-react":{
        upvotes : 0
    },
    "learn-node":{
        upvotes : 0
    },
    "my-thoughts-on-resumes":{
        upvotes : 0
    }
}

const app = express();

app.use(bodyParser.json());

app.get('/hello',(req,res)=>res.send("Hello !!!"));
app.post("/hello",(req,res)=>{
    res.send(`Hello ${req.body.name} !`)
});

app.post("/api/article/:name/upvote",(req,res)=>{
    let articleName = req.params.name;
    upvotes[articleName].upvotes +=1;
    res.status(200).send(`Article ${articleName} got ${upvotes[articleName].upvotes} Upvotes.`);
});

app.listen(8000,()=>{
    console.log("Listening on Port 8000 .")
});