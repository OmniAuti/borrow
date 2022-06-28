const Items = require("../models/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const items = await Items.find({});

    res.status(200).send(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const getSingleItem = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const createSingleItem = async (req, res) => {
  try {
    const item = new Items({
      name: req.body.name,
      quantity: req.body.count,
      condition: req.body.condition,
      description: req.body.location,
    });

    console.log(req.body, "BODIED");

    await item.save((err, post) => {
      if (err) {
        console.log(err);
        return;
      } 
      res.status(201).json(post)
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const editSingleItem = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const deleteSingleItem = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};

module.exports = {
  getAllItems,
  getSingleItem,
  createSingleItem,
  editSingleItem,
  deleteSingleItem,
};
