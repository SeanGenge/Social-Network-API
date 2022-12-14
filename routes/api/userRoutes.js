const router = require('express').Router();
const {
	getUsers,
	getUserById,
	createUser,
	deleteUser,
	updateUser,
	addFriend,
	deleteFriend
} = require('../../controllers/userController');

router.route('/')
	.get(getUsers)
	.post(createUser);

router.route('/:userId')
	.get(getUserById)
	.delete(deleteUser)
	.put(updateUser);
	
router.route('/:userId/friends/:friendId')
	.post(addFriend)
	.delete(deleteFriend);

module.exports = router;
