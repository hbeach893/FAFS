import mongoose from 'mongoose';
import DriveRequest from './models/driveRequest';

const driveRequests = [
	{
		start: 'ADK',
		dest: 'Boston',
		price: "$10.00",
		date: '01/19/2018',
		time: '1:00PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'ADK',
		dest: 'Boston',
		price: "$5.00",
		date: '12/19/2017',
		time: '1:30PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'ADK',
		dest: 'NYC',
		price: "$5.00",
		date: '01/19/2018',
		time: '4:00PM',
		numSeats: '1',
		riderEmail: "d@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'BTV',
		dest: 'Church Street',
		price: "$5.00",
		date: '12/19/2017',
		time: '1:30PM',
		numSeats: '1',
		riderEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	},
	{
		start: 'BTV',
		dest: 'ADK',
		price: "$20.00",
		date: '12/19/2017',
		time: '6:00PM',
		numSeats: '3',
		riderEmail: "s@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)"
	}	
	];


// Connect to MongoDB
mongoose.connect('mongodb://localhost/driverequests');

// Go through each movie
driveRequests.map(data => {
  // Initialize a model with movie data
  const driveRequest = new DriveRequest(data);
  // and save it into the database
  driveRequest.save();
});