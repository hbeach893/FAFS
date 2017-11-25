import mongoose from 'mongoose';
import RideRequest from './models/rideRequest';

const rideRequests = [
	{
		start: 'ADK',
		dest: 'Boston',
		date: '01/19/2018',
		time: '12:20PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'ADK',
		dest: 'BTV',
		date: '12/19/2017',
		time: '1:30PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'ADK',
		dest: 'BTV',
		date: '01/19/2018',
		time: '4:00PM',
		numSeats: '1',
		riderEmail: "d@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'BTV',
		dest: 'ADK',
		date: '12/19/2017',
		time: '1:30PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'BTV',
		dest: 'ADK',
		date: '12/19/2017',
		time: '6:00PM',
		numSeats: '3'
		riderEmail: "s@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	}	
	];


// Connect to MongoDB
mongoose.connect('mongodb://localhost/riderequests');

// Go through each movie
rideRequests.map(data => {
  // Initialize a model with movie data
  const rideRequest = new RideRequest(data);
  // and save it into the database
  rideRequest.save();
});