import InventoryItem from '../models/inventoryItem';
import moment from 'moment';



export const index = (req, res, next) => {
  // Find all inventoryItems and return json response
  InventoryItem.find().lean().exec((err, inventoryItems) => res.json(
    { inventoryitems: inventoryItems}
  ));
};

export const additem = function(req, res) {
  const item = new InventoryItem(req.body);
    item.save((err, item) => {
    if (err) return next(err);
      res.status(201);
      res.json(item);
    });
};
