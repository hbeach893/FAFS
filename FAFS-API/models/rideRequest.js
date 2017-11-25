import mongoose, { Schema } from 'mongoose';

// Define inventory item schema
var rideRequestSchema = new Schema({
  start: String,
  dest: String,
  date: String,
  time: String,
  numSeats: String,
  riderEmail: String,
  datePosted: String,
});

// Export Mongoose model
export default mongoose.model('rideRequest', rideRequestSchema);
