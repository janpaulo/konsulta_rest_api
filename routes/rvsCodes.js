const express = require("express");
const router = express.Router();
const db = require("../dbConnection");

const app = express();
var cors = require('cors')

function apiResponse(results) {
  return JSON.stringify({ data: results, status: 200 });
}

router.use(express.json());

// Define routes for product CRUD operations
router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM rvs_codes";

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
  // Implementation for retrieving products
});

        

router.get("/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM rvs_codes WHERE id=" + req.params.id;

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

router.post("/", (req, res) => {
    // const { series_no, member_pin, date_admited, status, hci_no, date_created , xml_data } = req.body;
    let data = {series_no: req.body.series_no, member_pin: req.body.member_pin,
        date_admited: req.body.date_admited, status: req.body.status, 
        hci_no: req.body.hci_no, date_created: req.body.date_created, xml_data: req.body.xml_data};
  
    let sqlQuery = "INSERT INTO rvs_codes SET ?";

    let query = db.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send( JSON.stringify({ data: "rvs_codes created successfully", status: true }));
    });
});

router.put("/:id", (req, res) => {

    let sqlQuery = "UPDATE rvs_codes SET series_no='"+req.body.series_no+"', member_pin='"+req.body.member_pin+"', date_admited='"+req.body.date_admited+"', status='"+req.body.status+"', hci_no='"+req.body.hci_no+"', date_created='"+req.body.date_created+"',  WHERE id="+req.params.id;
  
    let query = db.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
});

router.delete("/:id", (req, res) => {
    const productId = req.params.id;

    // Check if the product exists in the database
    db.query('SELECT * FROM rvs_codes WHERE id = ?', [productId], (error, results) => {
      if (error) {
        console.error('Error checking icd_codes existence:', error);
        return res.status(500).send('Failed to delete icd_codes');
      }
  
      // If no product with the given ID exists, return a 404 error
      if (results.length === 0) {
        return res.status(404).send(JSON.stringify({ data: 'icd_codes not found', status: false }));
      }
  
      // Product exists, proceed with deletion
      db.query('DELETE FROM rvs_codes WHERE id = ?', [productId], (deleteError, deleteResults) => {
        if (deleteError) {
          console.error('Error deleting product:', deleteError);
          return res.status(500).send('Failed to delete icd_codes');
        }
        
        // Respond with success message
        res.status(200).send(JSON.stringify({ data: "icd_codes deleted successfully", status: true }) );
      });
    });
});

// Route handler for '/test'
router.get('/test', (req, res) => {
  // Construct SQL query
  const sqlQuery = 'SELECT * FROM rvs_codes';
  // Assuming you're passing the value of 'test' as a query parameter
  // const testValue = req.query.test;

  // Execute SQL query
  db.query(sqlQuery, [testValue], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Error retrieving data from database');
      return;
    }
    // Send the results back as a JSON response
    res.json(results);
  });
});


router.get('/autocomplete', (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ message: 'Missing search term' });
  }

  // const query = `
  //   SELECT *
  //   FROM rvs_codes
  //   WHERE rvs_code LIKE ? OR description LIKE ?
  //   LIMIT 10;`;

  // const searchTerm = `%${term}%`;

  console.log(term)
  // db.query(query, [searchTerm, searchTerm], (error, results, fields) => {
  //   if (error) {
  //     console.error('Error executing query:', error);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }

  //   const suggestions = results.map(result => ({
  //     rvs_code: result.rvs_code,
  //     description: result.description,
  //     case_rate: result.case_rate,
  //     professional_fee: result.professional_fee,
  //     hci_fee: result.hci_fee,
  //     id: result.id,
  //   }));

  //   res.json(suggestions);
  // });
});

module.exports = router;
