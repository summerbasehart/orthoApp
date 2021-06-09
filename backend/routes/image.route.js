const express = require('express');
const app = express();
const imageRoute = express.Router();

// Image model
let Image = require('../models/Image');

// Add Image
imageRoute.route('/create').post((req, res, next) => {
  Image.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Images
imageRoute.route('/').get((req, res) => {
  Image.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single image
imageRoute.route('/read/:id').get((req, res) => {
  Image.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update image
imageRoute.route('/update/:id').put((req, res, next) => {
  Image.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete image
imageRoute.route('/delete/:id').delete((req, res, next) => {
  Image.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = imageRoute;