import express, { Router } from 'express';
// Import index action from inventoryItems controller
import { index, additem } from './controllers/inventoryItems';

import { indexRideRequests } from './controllers/rideRequests';

import { indexDriveRequests } from './controllers/driveRequests';
// Initialize the router
const router = Router();

// Handle /inventoryitems.json route with index action from movies controller
router.route('/inventoryitems')
  .get(index)
  .post(additem);

router.route('/riderequests')
  .get(indexRideRequests);

router.route('/driverequests')
  .get(indexDriveRequests);

// router.route('/additem').post('additem');

export default router;
