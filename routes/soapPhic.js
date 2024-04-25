const express = require("express");
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
const db = require("../dbConnection");
const { parseString } = require("xml2js");

const cors = require('cors');


router.use(cors());
// router.use(cors({
//   origin: 'https://eclaimstest2.philhealth.gov.ph:8077/soap?service=PhilhealthService' // Replace with your client's origin
// }));

// function apiResponse(results) {
//   return JSON.stringify({ data: results, status: 200 });
// }

router.use(express.json());
router.post('/memberSearch', async (req, res) => {
  const { lastname, firstname, middlename, suffix, bday,pUserName, pUserPassword, pHospitalCode } = req.body;

  const soapRequestBody = `
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
      <Body>
        <GetMemberPIN xmlns="http://philhealth.gov.ph">
          <pUserName>${pUserName}</pUserName>
          <pUserPassword>${pUserPassword}</pUserPassword>
          <pHospitalCode>${pHospitalCode}</pHospitalCode>
          <pMemberLastName>${lastname}</pMemberLastName>
          <pMemberFirstName>${firstname}</pMemberFirstName>
          <pMemberMiddleName>${middlename}</pMemberMiddleName>
          <pMemberSuffix>${suffix}</pMemberSuffix>
          <pMemberBirthDate>${moment(new Date(bday)).format("MM-DD-YYYY")}</pMemberBirthDate>
        </GetMemberPIN>
      </Body>
    </Envelope>
  `;
  try {
    const response = await axios.post('https://eclaimstest2.philhealth.gov.ph:8077/soap?service=PhilhealthService', soapRequestBody);
    // const data =res.json(response.data);
    
    parseString(response.data, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          return;
        }
        const responseData =
          result["SOAP-ENV:Envelope"]["SOAP-ENV:Body"][0][
            "NS1:GetMemberPINResponse"
          ][0]["Result"][0];
        // Rename key '_' to 'value'
        responseData.memPin = responseData._;
        delete responseData._;

        if (!responseData.memPin.includes("NO RECORDS FOUND")) {

            res.json({"data": responseData.memPin, "success": true})
        } else {
            res.json({"data": "No records found.","success": false});
        }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while making the request.' });
  }
});

router.post('/employerSearch', async (req, res) => {
    const { pPen, employerName,pUserName, pUserPassword, pHospitalCode } = req.body;
  
    const soapRequestBody = `
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <SearchEmployer xmlns="http://philhealth.gov.ph">
        <pUserName>${pUserName}</pUserName>
        <pUserPassword>${pUserPassword}</pUserPassword>
        <pHospitalCode>${pHospitalCode}</pHospitalCode>
            <pPEN>${pPen}</pPEN>
            <pEmployerName>${employerName}</pEmployerName>
        </SearchEmployer>
    </Body>
    </Envelope>
    `;
    try {
      const response = await axios.post('https://eclaimstest2.philhealth.gov.ph:8077/soap?service=PhilhealthService', soapRequestBody);
      // const data =res.json(response.data);
      
      parseString(response.data, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while making the request.' });
          return;
        }
        const responseData =
        result["SOAP-ENV:Envelope"]["SOAP-ENV:Body"][0]["NS1:SearchEmployerResponse"][0]["Result"][0];
      
      // Check if JSON data exists
      if (responseData && responseData._) {
        // Rename key '_' to 'resultData'
        responseData.resultData = responseData._;

        // Send the parsed data back to the client
        res.json(responseData.resultData);
      } else {
        res.status(404).json({ error: 'No JSON data found in XML response.' });
      }

      });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while making the request.' });
    }
  });

module.exports = router;
