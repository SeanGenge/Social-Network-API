const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
	deleteThought,
	updateThought
} = require('../../controllers/thoughtController');

router.route('/')
	.get(getThoughts)
	.post(createThought);

router.route('/:thoughtId')
	.get(getThoughtById)
	.delete(deleteThought)
	.put(updateThought);

module.exports = router;
