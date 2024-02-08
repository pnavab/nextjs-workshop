import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    _id: {
        type: String,
    }
});

// Create the model
export default mongoose.models.User || mongoose.model('User', userSchema);
