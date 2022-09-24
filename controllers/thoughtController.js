const { Thought } = require('../models');

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

const createThought = (req, res) => {
	Thought.create(req.body)
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

const deleteUser = (req, res) => {
	Thought.deleteOne({ _id: req.params.thoughtId })
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

const updateUser = (req, res) => {
	Thought.updateOne({ _id: req.params.thoughtId }, req.body)
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought
};