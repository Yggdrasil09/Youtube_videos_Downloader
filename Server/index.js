const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html');
});

app.listen(4000,()=>{
    console.log('Server listening to port 4000 on localhost');
});

app.get('/download',(req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition','attachment;filename="video.mp4"');
    ytdl(URL,{
        format : 'mp4'
    }).pipe(res);
});