import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:3000";

function ChatWindow({ matchId, userId, onClose, itemTitle }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // 1. Fetch History
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/chat/${matchId}`);
        setMessages(response.data);
      } catch (e) {
        console.error("Failed to fetch chat history:", e);
      }
    };
    fetchHistory();

    // 2. Setup Socket
    socketRef.current = io(SOCKET_URL);
    socketRef.current.emit("join_room", matchId);

    socketRef.current.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [matchId]);

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageData = {
      matchId,
      senderId: userId,
      text: newMessage,
    };

    socketRef.current.emit("send_message", messageData);
    setNewMessage("");
  };

  return (
    <div className="fixed inset-0 z-300 flex items-center justify-end md:p-6 pointer-events-none">
      <div className="w-full max-w-md h-full md:h-150 bg-white shadow-2xl rounded-none md:rounded-[2.5rem] flex flex-col pointer-events-auto animate-in slide-in-from-right duration-500 border border-slate-100 overflow-hidden">

        {/* Header */}
        <div className="bg-[#0B1528] p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-lg font-black leading-tight">Chat with Finder/Owner</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{itemTitle}</p>
          </div>
          <button
            id="close-chat-btn"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
          {messages.map((msg, index) => {
            const isMe = msg.senderId === userId;
            return (
              <div key={index} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-semibold shadow-sm ${
                  isMe
                    ? "bg-[#5cb9a5] text-white rounded-br-none"
                    : "bg-white text-slate-700 rounded-bl-none border border-slate-100"
                }`}>
                  {msg.text}
                  <span className={`block text-[8px] mt-1 opacity-60 ${isMe ? "text-right" : "text-left"}`}>
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100">
          <div className="relative flex items-center gap-3">
            <input
              id="chat-input-field"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 outline-none focus:border-[#5cb9a5] transition-all font-semibold text-slate-700"
            />
            <button
              id="send-chat-msg-btn"
              type="submit"
              className="w-14 h-14 bg-[#5cb9a5] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#5cb9a5]/20 hover:-translate-y-1 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
