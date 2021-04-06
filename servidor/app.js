const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response, request } = require('express');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended = false}));

//Create
app.post('/insert',(request,response)=>{

});


//Read
app.get('/gelAll',(request,response)=>{
    console.log('test');
})


//Update
 


//Delete

app.listen(process.env.PORT, ()=> console.log('app is runnig'));