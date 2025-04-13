import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import Group from "../models/group.model.js";

import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // console.log(req.user);
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json({filteredUsers});
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  } 
};

export const getGroups= async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const myGroup = await Group.find({$or: [{course: req.user.course}, {$and: [ {course: req.user.course}, {year: req.user.year} ]}] }).select("-course");
    // console.log(myGroup);
    res.status(200).json({myGroup});
  } catch (error) {
    console.error("Error in get Groups: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    // console.log("get msgs: ",userToChatId)

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
        {receiverId:userToChatId },

      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    
    // console.log(senderId, receiverId);
    console.log("request params", req.params);

    let imageUrl;
    if (image) {
      // Upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    // check receiver id is group
    const checkGrp = await Group.find({_id:receiverId});
    console.log(checkGrp);

    let newMessage ;
    if(checkGrp.length==0){
     newMessage = new Message({
        senderId,
        receiverId,
        text,
        image: imageUrl,
        msgType:'p',
      });
    }
    else{
      newMessage = new Message({
        senderId:receiverId,
        receiverId:senderId,
        text,
        image: imageUrl,
        msgType:'g',
      });
    }

    await newMessage.save();

    // start of socket work
    // console.log("sender  id", senderId);
    // when new msg come it always go to group/ if
    const members = await Group.findOne({_id: receiverId});
    // console.log(members)
    if (members) {
      console.log("Group details",members.name);
      // get only those group members socket id which present online
      io.to(members.name).emit("newMessage", newMessage);
      // members.members.map(id => io.to(id.toString()).emit("newMessage", newMessage)); // not send same msg to sendetr also

    } else{
      const receiverSocketId = getReceiverSocketId(receiverId);
      console.log("personal msg", receiverId);
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createGroup = async (req, res) => {
  try {
    const senderId = req.user._id;
    let name = req.body.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const newGroup = new Group({
      name,
      course: req.body.course,
      year: req.body.year,
      members: [senderId],
    });

    await newGroup.save();

    let updateUser = await User.updateOne(
      {_id: senderId},
      {$push: {groups: name}}
    );

    // add multiple user of same course and year
      
    console.log("created group succesfully");

    res.status(201).json("Created Group Successfully!");
    
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
