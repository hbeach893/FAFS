import express, { Router } from 'express';
// Import index action from inventoryItems controller
import { index } from './controllers/inventoryItems';

// Initialize the router
const router = Router();

// Handle /inventoryitems.json route with index action from movies controller
router.route('/inventoryitems.json')
  .get(index);

export default router;
