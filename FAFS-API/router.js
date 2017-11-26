import express, { Router } from 'express';
// Import index action from inventoryItems controller
import { index, additem } from './controllers/inventoryItems';

import { indexRideRequests, addRideRequest } from './controllers/rideRequests';

import { indexDriveRequests, addDriveRequest } from './controllers/driveRequests';
// Initialize the router
const router = Router();

// Handle /inventoryitems.json route with index action from movies controller
router.route('/inventoryitems')
  .get(index)
  .post(additem);

router.route('/riderequests')
  .get(indexRideRequests)
  .post(addRideRequest);

router.route('/driverequests')
  .get(indexDriveRequests)
  .post(addDriveRequest);

// router.route('/additem').post('additem');

export default router;
