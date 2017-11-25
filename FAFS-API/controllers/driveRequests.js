import DriveRequest from '../models/driveRequest';
import moment from 'moment';



export const indexDriveRequests = (req, res, next) => {
  // Find all inventoryItems and return json response
  DriveRequest.find().lean().exec((err, driveRequests) => res.json(
    { driverequests: driveRequests}
  ));
};