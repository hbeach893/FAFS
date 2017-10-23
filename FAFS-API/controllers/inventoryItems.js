import InventoryItem from '../models/inventoryItem';
import moment from 'moment';



export const index = (req, res, next) => {
  // Find all inventoryItems and return json response
  InventoryItem.find().lean().exec((err, inventoryItems) => res.json(
    { inventoryitems: inventoryItems}
  ));
};
