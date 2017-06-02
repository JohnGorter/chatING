var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 

var todolist = [
    { title:'hond uitlaten', description:'test', done:false },
    { title:'hond uitlaten', description:'test', done:false },
    { title:'hond uitlaten', description:'test', done:false },
    { title:'hond uitlaten', description:'test', done:false },
    { title:'hond uitlaten', description:'test', done:false },
    { title:'hond uitlaten', description:'test', done:false },
];

app.use(bodyParser.json());

app.post('/data/todos', (req, res)=>{
    console.log('new data arrived!!!', req.body);
    req.body.done = false;
    todolist.push(req.body);
    res.end(JSON.stringify(todolist));
});

app.get('/data/todos', (req, res)=>{
    res.end(JSON.stringify(todolist));
});

app.use(express.static('.'));

app.listen(1234, function(){
    console.log('i am listening');
});
