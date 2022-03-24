const express = require('express');
const catchController = require("../controllers/catchController");

const router = express.Router();

router.get('/get-catches', catchController.getCatches);
router.get('/get-catch', catchController.getCatch);
router.post('/create-catch', catchController.createCatch);
router.post('/update-catch', catchController.updateCatch);
router.delete('/delete-catch', catchController.deleteCatch);

module.exports = router;