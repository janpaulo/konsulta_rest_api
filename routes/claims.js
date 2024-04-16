const express = require("express");
const router = express.Router();
const db = require("../dbConnection");

function apiResponse(results) {
  return JSON.stringify({ data: results, status: 200 });
}

router.use(express.json());

// Define routes for product CRUD operations
router.get("/", (req, res) => {
  console.log("here");
  let sqlQuery = "SELECT * FROM claims";

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
  // Implementation for retrieving products
});

        

router.get("/:id", (req, res) => {
  let sqlQuery = "SELECT * FROM claims WHERE id=" + req.params.id;

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
  
    let sqlQuery = "INSERT INTO claims SET ?";

    let query = db.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send( JSON.stringify({ data: "Claims created successfully", status: true }));
    });
});

router.put("/:id", (req, res) => {

    let sqlQuery = "UPDATE claims SET series_no='"+req.body.series_no+"', member_pin='"+req.body.member_pin+"', date_admited='"+req.body.date_admited+"', status='"+req.body.status+"', hci_no='"+req.body.hci_no+"', date_created='"+req.body.date_created+"',  WHERE id="+req.params.id;
  
    let query = db.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
});

router.delete("/:id", (req, res) => {
    const productId = req.params.id;

    // Check if the product exists in the database
    db.query('SELECT * FROM claims WHERE id = ?', [productId], (error, results) => {
      if (error) {
        console.error('Error checking claims existence:', error);
        return res.status(500).send('Failed to delete Claims');
      }
  
      // If no product with the given ID exists, return a 404 error
      if (results.length === 0) {
        return res.status(404).send(JSON.stringify({ data: 'Claims not found', status: false }));
      }
  
      // Product exists, proceed with deletion
      db.query('DELETE FROM claims WHERE id = ?', [productId], (deleteError, deleteResults) => {
        if (deleteError) {
          console.error('Error deleting product:', deleteError);
          return res.status(500).send('Failed to delete claims');
        }
        
        // Respond with success message
        res.status(200).send(JSON.stringify({ data: "Claims deleted successfully", status: true }) );
      });
    });
});

module.exports = router;
