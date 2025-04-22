const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  id_performance: {
    type: Number,
    unique: true,
    required: true
  },
  description_performance: {
    type: String
  },
  name_performance: {
    type: String,
    required: true
  },
  duration_performance: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('performance', performanceSchema)
