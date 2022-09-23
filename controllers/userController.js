const { User } = require('../models');

const getUsers = (req, res) => {
	User.find()
		.then((user) => res.json(user))
		.catch((err) => res.status(500).json(err));
};

const getSingleUser = (req, res) => {
	User.findOne({ _id: req.params.userId })
		.then((user) =>
			!user
				? res.status(404).json({ message: 'No user with that ID' })
				: res.json(user)
		)
		.catch((err) => res.status(500).json(err));
};

// const createUser = (req, res) => {
// 	User.create(req.body)
// 		.then((dbPostData) => res.json(dbPostData))
// 		.catch((err) => res.status(500).json(err));
// }

module.exports = {
	getUsers,
	getSingleUser,
	// createUser
};