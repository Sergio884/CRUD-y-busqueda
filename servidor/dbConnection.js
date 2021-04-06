const mysql = require('mysql');
const dotenv = require('dotenv');
const { response } = require('express');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'crud',
        port: '3307'
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('db '+connection.state);
});

class dbConnection{
    static getDbConnection(){
        return instance ? instance : new dbConnection();
    }

    async getAllData(){
        try{
            const response = await new Promise((resolve,reject) => {
                const query = "SELECT * FROM nombres;";
                connection.query(query,(err,results)=> {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response
        } catch(error){
            console.log(error);
        }
    }
}

module.exports = dbConnection;  