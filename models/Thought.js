const { Schema, model } = require('mongoose');
const Reaction = require('../models/Reaction');

// Schema to create Thoughts model
const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		username: {
			type: String
		},
		reactions: [Reaction],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
