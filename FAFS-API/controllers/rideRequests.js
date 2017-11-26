import RideRequest from '../models/rideRequest';
import moment from 'moment';



export const indexRideRequests = (req, res, next) => {
  // Find all inventoryItems and return json response
  RideRequest.find().lean().exec((err, rideRequests) => res.json(
    { riderequests: rideRequests}
  ));
};

export const addRideRequest = function(req, res) {
  const rideRequest = new RideRequest(req.body);
    rideRequest.save((err, item) => {
    if (err) return next(err);
      res.status(201);
      res.json(item);
    });
};
