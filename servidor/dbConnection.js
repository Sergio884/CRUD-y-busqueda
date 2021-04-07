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
    static getDbConnectionInstancia(){
        return instance ? instance : new dbConnection();
    }

    async getAllData(){
        try{
            const response = await new Promise((resolve,reject) => {
                const query = "SELECT * FROM nombre;";
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

    async insertarNombre(name){
        try{
            const date = new Date();
            const insertID = await new Promise((resolve,reject) => {
                const query = "INSERT INTO nombre(name,date) VALUES(?,?);";
                connection.query(query,[name,date],(err,result)=> {
                    if(err) reject(new Error(err.message));
                    resolve(result.insertID);
                })
            });
            return {
                id : insertID,
                name : name,
                date : date
            }
        } catch(error){
            console.log(error);
        }
    }
}


module.exports = dbConnection;  