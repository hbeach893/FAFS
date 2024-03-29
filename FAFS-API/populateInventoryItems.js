import mongoose from 'mongoose';
import InventoryItem from './models/inventoryItem';

const inventoryItems = [
	{
		title: 'Calculator',
		desc: 'This is a description of a couch',
		image: 'https://previews.123rf.com/images/karandaev/karandaev1105/karandaev110500056/9626989-Large-calculator-Isolated-on-white-background-Stock-Photo-calculate.jpg',
		price: '$5.00',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{
		title: 'Silverware',
		desc: 'This a description of a lamp',
		image: 'https://thumbs.dreamstime.com/z/antique-silverware-13551481.jpg',
		price: '$9.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Couch',
		desc: 'This is a description of a couch',
		image: 'https://thumbs.dreamstime.com/z/simply-modern-couch-18848411.jpg',
		price: '$349.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Chair',
		desc: 'This a description of a lamp',
		image: 'https://thumbs.dreamstime.com/z/wooden-chair-379970.jpg',
		price: '$99.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Chair',
		desc: 'This is a description of a couch',
		image: 'https://thumbs.dreamstime.com/z/antique-kitchen-chair-4736472.jpg',
		price: '$149.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Green Chair',
		desc: 'This a description of a lamp',
		image: 'https://thumbs.dreamstime.com/b/green-chair-9637994.jpg',
		price: '$15.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Sweater',
		desc: 'This is a description of a couch',
		image: 'http://l7.alamy.com/zooms/c3600425956f45b6bd731a65c1283e39/black-sweater-with-a-pattern-of-polka-dots-f3y37r.jpg',
		price: '$19.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Green Lamp',
		desc: 'This a description of a lamp',
		image: 'https://thumbs.dreamstime.com/z/old-banker-style-lamp-1294136.jpg',
		price: '$19.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{

		title: 'Plaid Skirt',
		desc: 'This is a description of a couch',
		image: 'https://thumbs.dreamstime.com/z/skirt-pleated-plaid-school-uniform-white-background-56192612.jpg',
		price: '$7.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	},
	{
		
		title: 'Molecular Biology of the Cell',
		desc: 'This a description of a lamp',
		image: 'http://c8.alamy.com/comp/DA28J9/molecular-biology-of-the-cell-medical-textbook-DA28J9.jpg',
		price: '$59.99',
		ownerEmail: "coco@middlebur.edu",
		datePosted: "Mon Oct 23 2017 11:08:21 GMT-0400 (EDT)",
		type: []
	}
];


// Connect to MongoDB
mongoose.connect('mongodb://localhost/fafs');

// Go through each movie
inventoryItems.map(data => {
  // Initialize a model with movie data
  const inventoryItem = new InventoryItem(data);
  // and save it into the database
  inventoryItem.save();
});
