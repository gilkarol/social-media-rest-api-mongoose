import mongoose, { Schema } from 'mongoose'

const profileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
		unique: true
	},
	nickname: {
		type: String,
		required: true,
		unique: true
	},
	imageUrl: String,
	posts: [
		{
			type: Schema.Types.ObjectId, 
			ref: 'Post'
		}
	],
	blockedProfiles: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
	],
	friends: [{
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}],
    profilesWhoInvited: [
        {
            type: Schema.Types.ObjectId,
			ref: 'Profile',
        }
    ],
	invitedProfiles: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Profile',
		},
	],
	Messages: [
		{
			type: Schema.Types.ObjectId,
			ref: 'PrivateChat',
		},
	],
})

export default mongoose.model('Profile', profileSchema)
