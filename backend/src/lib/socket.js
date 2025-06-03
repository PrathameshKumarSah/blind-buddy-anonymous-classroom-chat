import { Server } from "socket.io";
import http from "http";
import express from "express";
import User from "../models/user.model.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

const joinUsersToGroup = async (socket, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return;

    user.groups.forEach((grp) => {
      socket.join(grp);
    });
  } catch (err) {
    console.error("Error joining groups:", err);
  }
};


io.on("connection", (socket) => {
  console.log("A user connected", socket.id, socket.handshake.query.userId);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  joinUsersToGroup(socket, userId);

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    // Only remove the socket if it's still the one stored
    if (userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
    // console.log("map:::::::::", userSocketMap);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
