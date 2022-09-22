const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId
		},
		reactionBody: {
			type: String
		},
		username: {
			type: String
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
	}
);

module.exports = Reaction;
