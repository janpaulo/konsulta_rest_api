const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
   
/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());
   
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: 'localhost' ,
  user: 'root', /* MySQL User */
  password: '', /* MySQL Password */
  database: 'claims_api' /* MySQL Database */
});
   
/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});
   
/**
 * Get All Items
 *
 * @return response()
 */
app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM user_accounts";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/items/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM user_accounts WHERE id=" + req.params.id;
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items',(req, res) => {
  let data = {title: req.body.title, body: req.body.body};
  
  let sqlQuery = "INSERT INTO user_accounts SET ?";
  
  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/items/:id',(req, res) => {
  let sqlQuery = "UPDATE user_accounts SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/items/:id',(req, res) => {
  let sqlQuery = "DELETE FROM user_accounts WHERE id="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});

// Route for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  conn.query('SELECT * FROM user_accounts WHERE username = ? AND password = ?', [username, password], (error, results) => {
    if (error) {
      console.error('Error retrieving user:', error);
      return res.status(500).send('Internal Server Error');
    }

    if (results.length === 0) {
      return res.status(401).send('Username or password incorrect');
    }

     // Extract user data from the query result
     const user = results[0];

     // Remove the password from the user object before sending it in the response
     delete user.password;
 
     // Return the user data in the response
     res.json(user);

  });
});


/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});