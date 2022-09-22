const { Schema, model } = require('mongoose');

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
		reactions: [
			{
				type: Schema.Types.ObjectId,
				ref: 'reaction',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

userSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
