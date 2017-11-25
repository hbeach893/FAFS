import mongoose, { Schema } from 'mongoose';

// Define inventory item schema
var driveRequestSchema = new Schema({
  start: String,
  dest: String,
  price: String,
  date: String,
  time: String,
  numSeats: String,
  riderEmail: String,
  datePosted: String,
});

// Export Mongoose model
export default mongoose.model('driveRequest', driveRequestSchema);
