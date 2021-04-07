const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response, request } = require('express');
dotenv.config();

const dbConnection = require('./dbConnection.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Create
app.post('/insert',(request,response)=>{
    const {name}=request.body;
    const db = dbConnection.getDbConnectionInstancia();

    const result = db.insertarNombre(name);

    result
    .then(data => response.json({data:data}))
    .catch(err => console.log(err));

});


//Read
app.get('/getAll',(request,response)=>{
    console.log('test');
    const db = dbConnection.getDbConnectionInstancia();
    const result = db.getAllData();

    result
    .then(data => response.json({data:data}))
    .catch(err => console.log(err));
})


//Update
 


//Delete

app.listen(process.env.PORT, ()=> console.log('app is runnig'));