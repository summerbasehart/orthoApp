const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Image = new Schema({
   id: {
      type: String
   },
   imageDescription: {
      type: String
   },
   imagePath: {
      type: String
   },

}, {
   collection: 'images'
})

module.exports = mongoose.model('Image', Image)