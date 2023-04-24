const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  maxAttendees: {
    type: Number,
    required: true
  },
  transport: {
    type: String,
    enum: ['train', 'bus', 'car', 'flight'],
    required: true
  },
  hotel: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
