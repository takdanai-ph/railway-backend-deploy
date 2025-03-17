const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.UUID, default: () => new mongoose.Types.UUID(), unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Manager', 'User'], default: 'User' },
    profile_picture: { type: String, default: '' },
    team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: null },
    assigned_tasks: [{ type: mongoose.Schema.Types.UUID, ref: 'Task' }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)