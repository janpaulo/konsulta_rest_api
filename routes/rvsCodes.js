const express = require("express");
const router = express.Router();
const db = require("../dbConnection");

const app = express();
var cors = require('cors')

router.use(cors());
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
    let data ={rvs_code:req.body.rvs_code, description:req.body.description,
      case_rate:req.body.case_rate,professional_fee:req.body.professional_fee,hci_fee:req.body.hci_fee};

    let sqlQuery = "INSERT INTO rvs_codes SET ?";

    let query = db.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send( JSON.stringify({ data: "rvs_codes created successfully", status: true }));
    });
});

router.put("/:id", (req, res) => {

  let sqlQuery = "UPDATE rvs_codes SET rvs_code='" + req.body.rvs_code + "', description='" + req.body.description + "', case_rate='" + req.body.case_rate + "', professional_fee='" + req.body.professional_fee + "', hci_fee='" + req.body.hci_fee + "' WHERE id=" + req.params.id;
  
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


module.exports = router;
