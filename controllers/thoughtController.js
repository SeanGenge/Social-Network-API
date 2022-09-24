const { Thought, User } = require('../models');

const getThoughts = (req, res) => {
	Thought.find()
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

const getThoughtById = (req, res) => {
	Thought.findOne({ _id: req.params.thoughtId })
		.then((thought) =>
			!thought
				? res.status(404).json({ message: 'No thought with that ID' })
				: res.json(thought)
		)
		.catch((err) => res.status(500).json(err));
};

const createThought = async (req, res) => {
	const { userId, ...rest } = req.body;
	
	const thought = await Thought.create(rest)
		.catch((err) => res.status(500).json(err));
		
	// Add the thought to the user array using the userId. If not it will match by name
	if (userId) {
		User.findOneAndUpdate({ _id: userId }, {
			$push: {
				thoughts: thought._id
			}
		})
			.catch((err) => res.status(500).json(err));
	}
	else {
		// Find the first match and update by username
		User.findOneAndUpdate({ usernamee: rest.username }, {
			$push: {
				thoughts: thought._id
			}
		})
			.catch((err) => res.status(500).json(err));
	}
	
	res.json(thought);
};

const deleteThought = (req, res) => {
	Thought.deleteOne({ _id: req.params.thoughtId })
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

const updateThought = (req, res) => {
	Thought.updateOne({ _id: req.params.thoughtId }, req.body)
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought
};