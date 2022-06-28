const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  description: {
    type: String,
    required:[true, 'Must provide description'],
    maxlength:[40, 'Description can not be more than 40 characters']
  },
  condition: {
    type: String,
      required: [true, 'Must provide condition'],
      enum:['new', 'slightly used', 'moderately used', 'heavily used']
  },
  quantity: {
    type: Number,
    required: [true, 'Must provide a quantity'],
  },
})

module.exports = mongoose.model('Items', ItemSchema)