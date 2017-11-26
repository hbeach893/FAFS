import DriveRequest from '../models/driveRequest';
import moment from 'moment';



export const indexDriveRequests = (req, res, next) => {
  // Find all inventoryItems and return json response
  DriveRequest.find().lean().exec((err, driveRequests) => res.json(
    { driverequests: driveRequests}
  ));
};

export const addDriveRequest = function(req, res) {
  const driveRequest = new DriveRequest(req.body);
    driveRequest.save((err, item) => {
    if (err) return next(err);
      res.status(201);
      res.json(item);
    });
};
