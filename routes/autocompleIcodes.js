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

// Endpoint for autocomplete search
router.get('/autocomplete', async (req, res) => {
  const { term } = req.query;

  try {
    const [rows, fields] = await connection.execute(
      'SELECT 	icd_10_code, description FROM icd_10_codes WHERE icd_10_code LIKE ? OR description LIKE ?',
      [`%${term}%`, `%${term}%`]
    );

    const suggestions = rows.map(row => row.icd_10_code);
    res.json(suggestions);
    console.log(res.json(suggestions))
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint for autocomplete search on multiple columns
router.get('/serchICDAutocomplete', (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ message: 'Missing search term' });
  }

  const query = `
    SELECT *
    FROM icd_codes
    WHERE icd_10_code LIKE ? OR description LIKE ?
    LIMIT 5;`;

  const searchTerm = `%${term}%`;

  db.query(query, [searchTerm, searchTerm], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const suggestions = results.map(result => ({
      icd_10_code: result.icd_10_code,
      description: result.description,
      group: result.group,
      case_rate: result.case_rate,
      professional_fee: result.professional_fee,
      hci_fee: result.hci_fee,
      id: result.id,
    }));
    console.log(results)

    res.json(suggestions);
  });
});


// Endpoint for autocomplete search on multiple columns
router.get('/serchRVSAutocomplete', (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ message: 'Missing search term' });
  }

  const query = `
    SELECT *
    FROM rvs_codes
    WHERE rvs_code LIKE ? OR description LIKE ?
    LIMIT 5;`;

  const searchTerm = `%${term}%`;

  db.query(query, [searchTerm, searchTerm], (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const suggestions = results.map(result => ({
      rvs_code: result.rvs_code,
      description: result.description,
      case_rate: result.case_rate,
      professional_fee: result.professional_fee,
      hci_fee: result.hci_fee,
      id: result.id
    }));
    console.log(results)

    res.json(suggestions);
  });
});


module.exports = router;
