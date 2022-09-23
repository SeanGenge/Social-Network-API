const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames } = require('./userData');
const { thoughtText } = require('./thoughtData');
const { reactionBody } = require('./ReactionData');

connection.on('error', (err) => err);

connection.once('open', async () => {
	console.log('connected');
	await User.deleteMany({});
	await Thought.deleteMany({});

	let users =  [];
	let reactions = [];
	let thoughts = [];
	
	// Setup all the reactions
	for (let i = 0; i < reactionBody.length; i++) {
		reactions.push({
			reactionBody: reactionBody[i],
			username: getRandomValue(usernames)
		});
	}
	
	// Setup all the thoughts
	for (let i = 0; i < thoughtText.length; i++) {
		let thoughtReactions = new Array(getRandomValue(reactions));
		
		thoughts.push({
			thoughtText: thoughtText[i],
			reactions: thoughtReactions
			// username: getRandomValue(usernames),
			// reactions: thoughtReactions
		});
	}
	
	await Thought.collection.insertMany(thoughts);
	
	// Setup all the users
	for (let i = 0; i < usernames.length; i++) {
		let userThoughts = new Array(getRandomValue(thoughts)._id);
		let a = getRandomValue(thoughts);
		users.push({
			username: usernames[i],
			email: usernames[i] + '@gmail.com',
			thoughts: userThoughts
		});
	}

	await User.collection.insertMany(users);
	console.log(users);
	process.exit(0);
});

const getRandomValue = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
};