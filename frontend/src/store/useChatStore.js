import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isCreateGroup:false,
  groups: [],

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      // console.log(res.data);
      set({ users: res.data.filteredUsers, });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getGroups: async () => {
    try {
      const res = await axiosInstance.get("/messages/groups");
      // console.log(res.data.myGroup);
      set({ groups: res.data.myGroup });
    } catch (error) {
      toast.error(error.response.data.message);
    } 
  },


  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.error("error in get msg");
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    // console.log("send msg");
    // console.log(selectedUser);
    // console.log(messages);
    try {
      // if(selectedUser._id){
      //   const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
      // } else{
      //   const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
      // }
      const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
      set({ messages: [...messages, res.data] });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", (newMessage) => {
      let isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
      if (!isMessageSentFromSelectedUser && !(newMessage.receiverId === selectedUser._id) ) return;

      set({
        messages: [...get().messages, newMessage],
      });
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),
  
  createGroup:async (formData) => {
    set({ isCreateGroup: true });
    try {
      const res = await axiosInstance.post("/messages/create-group", formData);
      set({ authUser: res.data });
      toast.success("Group Created updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isCreateGroup: false });
    }
  },
}));
