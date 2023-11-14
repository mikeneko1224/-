// import { NextResponse } from 'next/server';
// import * as mysql from 'promise-mysql';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: "staff",
    user: "root",
    password: ""
});
  
connection.connect((err) => {
    if(err) {
        console.log('Errorだよー')
    }else{
        console.log('接続できてるよー')
    }
});
connection.end();