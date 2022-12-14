const { Schema, Types } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
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
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

module.exports = reactionSchema;