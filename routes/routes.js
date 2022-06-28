const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  editSingleItem,
  deleteSingleItem,
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);

module.exports = router;
