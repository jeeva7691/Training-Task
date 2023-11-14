const express = require("express");
const app = express();
const cors = require("cors")
// instead of using body parser we can use this
app.use(express.json()) 
app.use(cors())
var mysql = require("mysql");
var db = mysql.createConnection({
host: "localhost",
user: "jeeva",
password: "jeeva@123",
database: "server",
});
db.connect(function (err) {
if (err) {
console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id " + db.threadId);
});
app.post("/createUser", (req, res) => {
    db.query(
    "insert into userinfo (id,name,age,phno,salary,isActive) values(?,?,?,?,?,?)",
    [req.body.id, req.body.name,req.body.age,req.body.phno,req.body.salary,1],
    function (error, results, fields) {
    if (error) console.log(error);
    console.log("Created successfully");
    res.json(results);
    }
    );
    });
    // get all users
    app.get("/getAllUsers", (req, res) => {
    db.query(
    "SELECT id,name,age,phno,salary from userinfo where isActive=1 ",
    function (error, results, fields) {
    if (error) console.log(error);
    console.log("All Users:", results);
    res.json(results);
    }
    );
    });
    // get user by id++++
    app.get("/getUserById/:id", (req, res) => {
    // let user = usersList.filter(e=>e.id==req.params.id)
    // res.json(user)
    db.query(
    "SELECT id,name,age,phno,salary from userinfo where id=?",
    [req.params.id],
    function (error, results, fields) {
    if (error) console.log(error);
    console.log("one user:", results);
    res.json(results);
    }
    );
    });
    app.put("/updateUserById/:id", (req, res) => {
    db.query(
    "update userinfo set name=?,age=?,phno=?,salary=? where id=?",
    [req.body.name,req.body.age,req.body.phno,req.body.salary, req.params.id],
    function (error, results, fields) {
    if (error) console.log(error);
    console.log("updated successfully");
    res.json(results);
    }
    );
    });
    app.put("/deleteUserById/:id", (req, res) => {
    db.query(
    "update userinfo set isActive=0 where id=?",
    [req.params.id],
    function (error, results, fields) {
    if (error) console.log(error);
    console.log("updated successfully");
    res.json(results);
    }
    );
    });
    app.listen(4000, () => {
    console.log("listening on port 4000");
    });