import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
    {
        username: {
                type: String,
                required: true,
                unique: true,
        },
        email: {
                type: String,
                required: true,
                unique: true,
        },
        password: {
                type: String,
                required: true,
        },
        comments: {
                type: Number,
                required: true,
                default: 0,
        },
        posts: {
                type: Number,
                required: true,
                default: 0,
        },
        isAdmin: {
                type: Boolean,
                required: true,
                default: false,
        },
        contact: {
                type: String,
                required: false,
        },
        introduction: {
                type: String,
                required: false,
        },
        birthday: {
                type: Date,
                required: true,
        }
    }
)

export default mongoose.model("User", UserSchema);