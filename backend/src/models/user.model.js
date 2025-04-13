import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    course: {
      type: String,
      default: "B.Tech",
    },
    year: {
      type: Number,
      default: "1",
    },
    groups: [{
      type:String,
    }], // Array of user IDs
    gender: {
      type: String,
      default: "Male",
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
