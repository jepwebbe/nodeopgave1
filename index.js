import express from "express"
import mysql from "mysql"

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'database test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const app = express();
const PORT = process.env.PORT || 3214;

app.get("/", (req, res) => {
    res.send('Hej verden!');
});

app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
})