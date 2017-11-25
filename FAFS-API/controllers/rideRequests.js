import RideRequest from '../models/rideRequest';
import moment from 'moment';



export const indexRideRequests = (req, res, next) => {
  // Find all inventoryItems and return json response
  RideRequest.find().lean().exec((err, rideRequests) => res.json(
    { riderequests: rideRequests}
  ));
};