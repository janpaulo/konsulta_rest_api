var mysql = require('mysql');
// var conn = mysql.createConnection({
//   host: 'localhost', // Replace with your host name
//   user:  'root',      // Replace with your database username
//   password: '',      // Replace with your database password
//   // database:  process.env.DATABASE_NAME // // Replace with your database Name
//   database:  'claims_api' // // Replace with your database Name
// });

var conn = mysql.createConnection({
  host: 'bpvgwvufwjdaeotwsmce-mysql.services.clever-cloud.com',
  user: 'uivgdi2z1ep6blr1',
  password: 'FwWTl3vNdX8qVWEkupoP',
  database: 'bpvgwvufwjdaeotwsmce',
}); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;