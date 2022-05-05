import express from "express"
import mysql from "mysql"

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'webshop',
  port: '3666'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const app = express();
const PORT = process.env.PORT || 3456;

app.get("/", (req, res) => {
    res.send('Hej verden!');
});

app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
});

let sql1 = `SELECT * FROM customers ORDER BY cname `;
let sql2 = `SELECT * FROM customers WHERE cid >= 8`;
let sql3 = `SELECT cid FROM customers WHERE cid >= 5 ORDER BY cname DESC`;
let sql4 = `SELECT cname FROM customers WHERE cid = 4`;
let sql5 = `SELECT * FROM customers ORDER BY email`;
let sql6 = `SELECT * FROM customers WHERE cname = "Daniel"`;
let sql7 = `SELECT cname, address FROM customers`
let sql8 = `SELECT phone FROM customers WHERE cname = "Anne"`
let sql9 = `UPDATE customers SET address="Bankebordsvej 3" WHERE cid = 7;`
let sql10 = `INSERT INTO customers (cid, cname, email, phone, address) VALUES ?`
let sql10v = [
[10, "Sarangan", "sarangan@icq.de", 98989898, "Bovej 88"],
[11, "Johnny", "johnny@icq.de", 22121212, "Levegade 12"],
[12, "Johnny", "johnn@icq.de", 32121212, "Levegade 13"],
[13, "Johnny", "john@icq.de", 42121212, "Levegade 14"],
[14, "Johnny", "joh@icq.de", 52121212, "Levegade 15"],
]
let sql10rmv = `DELETE FROM customers WHERE cid >= 16`
let sql11 = `DELETE FROM customers WHERE email = "johnn@icq.de"`
/* Spørgsmål 1-9 lavet med nedenstående funktion:
connection.query(sql9, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
}); */
/* connection.query(sql10, [sql10v], (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
}); */
connection.query(sql11, (error, results) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});
