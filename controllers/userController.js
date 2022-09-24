const { User } = require('../models');

const getUsers = (req, res) => {
	User.find()
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

const getUserById = (req, res) => {
	User.findOne({ _id: req.params.userId })
		.then((user) =>
			!user
				? res.status(404).json({ message: 'No user with that ID' })
				: res.json(user)
		)
		.catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
	User.create(req.body)
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

const deleteUser = (req, res) => {
	User.deleteOne({_id: req.params.userId})
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

const updateUser = (req, res) => {
	User.updateOne({ _id: req.params.userId }, req.body)
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

const addFriend = (req, res) => {
	// userId and friendId being passed here
	User.findOneAndUpdate({ _id: req.params.userId }, {
		// Adds the friendId to the friends array
		$push: {
			friends: req.params.friendId
		}
		},
		{ new: true })
		.then((user) =>
			!user
				? res.status(404).json({ message: 'No user with that ID' })
				: res.json(user)
		)
		.catch((err) => res.status(500).json(err));
};

const deleteFriend = (req, res) => {
	// userId and friendId being passed here
	User.findOneAndUpdate({ _id: req.params.userId }, {
		// Remove the friendId from the friends array
		$pull: {
			friends: req.params.friendId
		}
	},
		{ new: true })
		.then((user) =>
			!user
				? res.status(404).json({ message: 'No user with that ID' })
				: res.json(user)
		)
		.catch((err) => res.status(500).json(err));
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	deleteUser,
	updateUser,
	addFriend,
	deleteFriend
};