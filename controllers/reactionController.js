const { Thought } = require('../models');

const createReaction = async (req, res) => {
	const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {
		$addToSet: { reactions: req.body }
	}, { new: true })
		.catch((err) => res.status(500).json(err));
		
	res.json(thought);
};

const deleteReaction = (req, res) => {
	Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {
		$pull: { reactions: { reactionId: req.params.reactionId } }
	}, { new: true })
		.then((thought) => res.json(thought))
		.catch((err) => res.status(500).json(err));
};

module.exports = {
	createReaction,
	deleteReaction
};