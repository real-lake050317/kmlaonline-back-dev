import mongoose from "mongoose";
const { Schema } = mongoose;

const EnvironmentSchema = new mongoose.Schema({
    postNumber: {
        type: Number,
    },
});

export default mongoose.model("Environment", EnvironmentSchema);
