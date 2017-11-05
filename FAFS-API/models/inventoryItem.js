import mongoose, { Schema } from 'mongoose';

// Define inventory item schema
var inventoryItemSchema = new Schema({
  title: String,
  desc: String,
  image: String,
  price: String,
  ownerEmail: String,
  datePosted: String,
  type: Array
});

// Export Mongoose model
export default mongoose.model('inventoryItem', inventoryItemSchema);
