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

});


//Read
app.get('/gelAll',(request,response)=>{
    const db = dbConnection.getDbConnection();
    const result = db.getAllData();

    result
    .then(data => response.json({data:data}))
    .catch(err => console.log(err));
})


//Update
 


//Delete

app.listen(process.env.PORT, ()=> console.log('app is runnig'));