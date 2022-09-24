const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
	deleteThought,
	updateThought
} = require('../../controllers/thoughtController');

const {
	createReaction,
	deleteReaction
} = require('../../controllers/reactionController');

router.route('/')
	.get(getThoughts)
	.post(createThought);

router.route('/:thoughtId')
	.get(getThoughtById)
	.delete(deleteThought)
	.put(updateThought);
	
router.route('/:thoughtId/reactions')
	.post(createReaction);
	
router.route('/:thoughtId/reactions/:reactionId')
	.delete(deleteReaction);

module.exports = router;
