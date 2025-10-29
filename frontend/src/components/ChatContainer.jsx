import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { formatMessageTime } from "../lib/utils";
import { Trash } from "lucide-react";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
    deleteMessage,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    message: null,
  });

  useEffect(() => {
    if (!selectedUser?._id) return;

    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser?._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages.length > 0) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = () =>
      setMenu({ visible: false, x: 0, y: 0, message: null });
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDelete = () => {
    if (menu.message) {
      deleteMessage(menu.message._id);
      setMenu({ visible: false, x: 0, y: 0, message: null });
    }
  };

  const handleMessageMenu = (e, message) => {
    if( message?.msgType === "p" && message?.senderId !== authUser._id) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    console.log("Message bubble rect:", rect);
    // const offsetX = rect.x + 10; // adjust distance from bubble
    const offsetY = rect.height+5;
    setMenu({
      visible: true,
      x: rect.x + 10, // appear to the right of message bubble
      y: rect.top + offsetY,
      message,
    });
  };

  const checkMsgType = (msg) => {
    return msg.msgType === "p"   // "p" is use for private messages
      ? msg.senderId === authUser._id
      : msg.receiverId === authUser._id;
  };

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto relative">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              checkMsgType(message) ? "chat-end" : "chat-start"
            }`}
            ref={messageEndRef}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>

            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>

            <div
              className="chat-bubble flex flex-col relative group"
              onContextMenu={(e) => handleMessageMenu(e, message)}
              onDoubleClick={(e) => handleMessageMenu(e, message)}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      {menu.visible && (
        <div
          className="fixed bg-white shadow-md rounded-md border text-sm z-50"
          style={{
            top: `${menu.y}px`,
            left: `${menu.x}px`,
            right: `${menu.right}px`,
          }}
        >
          <button
            onClick={handleDelete}
            className="w-full text-left px-3 py-1 rounded flex items-center text-red-700 border border-red-200 hover:bg-red-50"
          >
            <Trash className="inline-block mr-2 w-4 h-4" />
            Delete
          </button>
        </div>
      )}

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
