import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    course: String,
    year: Number,
    profilePic: {
        type: String,
        default: "",
      },
    members: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }], // Array of user IDs
});
const Group = mongoose.model("Group", GroupSchema);

export default Group;
