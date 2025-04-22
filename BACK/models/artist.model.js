const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name_artist: {
    type: String,
    required: true
  },
  first_name_artiste: {
    type: String,
    required: true
  },
  stage_name: {
    type: String,
    default: null
  },
  date_of_birth: {
    type: Date,
    default: null
  },
  nationality: {
    type: String,
    default: null
  },
  picture_artist: {
    type: String, // chemin ou URL
    default: null
  },
  biography_artist: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, {
  collection: 'artists', // nom de la collection dans MongoDB
  timestamps: true // ajoute automatiquement createdAt et updatedAt
});

module.exports = mongoose.model('artists', artistSchema);
