// import { NextResponse } from 'next/server';
// import * as mysql from 'promise-mysql';

// const dbsetting = {
//     host: "127.0.0.1",
//     port: 3306,
//     database: "staff",
//     user: "root",
//     password: ""
//   }
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const connection = app.createConnection({
//     host: "127.0.0.1",
//     port: 3306,
//     database: "staff",
//     user: "root",
//     password: ""
// });
  
//   export async function Dbquery(sql) {
//     const connection = await mysql.createConnection({
//       host: dbsetting.host,
//       port: dbsetting.port,
//       database: dbsetting.database,
//       user: dbsetting.user,
//       password: dbsetting.password,
//     });
//     connection.connect((err) => {
//         if(err) {
//             console.log('Errorだよー')
//         }
//     });
//     const result = await connection.query(sql);
//     connection.end();
//     return result;
//   }

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     port: 3306,
//     database: "staff",
//     user: "root",
//     password: ""
// });

//   export async function addTime(obj) {
//     const query = connection.query('INSERT INTO add_time SET ?', obj, (err, result) => {
//         if (err) throw err;
//         console.log('データが挿入されました。');
//     });
//   }