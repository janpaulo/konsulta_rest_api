const express = require("express");
const router = express.Router();
const db = require("../dbConnection");
const app = express();
var cors = require('cors')

function apiResponse(results) {
  return JSON.stringify({ response: results, status: 200 });
}

router.use(express.json());

// Define routes for product CRUD operations
router.get("/", (req, res) => {
  let sqlQuery = "SELECT * FROM esoa";

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
  // Implementation for retrieving products
});

router.get("/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM esoa WHERE id=" + req.params.id;

  let query = conn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});


router.post("/", (req, res) => {
    let data = {professional_fee: req.body.professional_fee, hci_no: req.body.hci_no, total_amount: req.body.total_amount, sum_philhealth_amount: req.body.sum_philhealth_amount, prof_philhealth_amount: req.body.prof_philhealth_amount, xml_data: req.body.xml_data};
  
    let sqlQuery = "INSERT INTO esoa SET ?";
    
    let query = db.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.status(200).send(JSON.stringify({ data: "ESOA created successfully", status: true }) );
    });
});

router.put("/:id", (req, res) => {
    let sqlQuery = "UPDATE esoa SET title='"+req.body.title+"', body='"+req.body.body+"' WHERE id="+req.params.id;
  
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
});

router.delete("/:id", (req, res) => {
    const productId = req.params.id;

    // Check if the product exists in the database
    db.query('SELECT * FROM esoa WHERE id = ?', [productId], (error, results) => {
      if (error) {
        console.error('Error checking ESOA existence:', error);
        return res.status(500).send('Failed to delete esoa');
      }
  
      // If no product with the given ID exists, return a 404 error
      if (results.length === 0) {
        return res.status(404).send(JSON.stringify({ data: 'ESOA not found', status: false }));
      }
  
      // Product exists, proceed with deletion
      db.query('DELETE FROM claims WHERE id = ?', [productId], (deleteError, deleteResults) => {
        if (deleteError) {
          console.error('Error deleting product:', deleteError);
          return res.status(500).send('Failed to delete ESOA');
        }
        
        // Respond with success message
        res.status(200).send(JSON.stringify({ data: "ESOA deleted successfully", status: true }) );
      });
    });
});

module.exports = router;
