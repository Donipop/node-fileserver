const express = require('express')
const fs = require('fs');
const ff = require('./js/file');
const app = express();
const port = 8000;

app.use('/js', express.static(__dirname + '/js'));

app.get('/', (req,res) =>{
    //res.send("File Server");
    res.sendFile(__dirname + '/index.html');
})
app.get('/file',(req,res) =>{
    res.send(ff.listg());
})
app.get('/download',function(req,res){
    const filepath = `${__dirname}/file/${req.query.filename}`
    res.download(filepath);
})
app.listen(port,()=>{
    console.log(`서버켜짐 ${port}`);
})