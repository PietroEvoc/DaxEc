import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/messages/conversation/${user.email}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: user.email, recipient: "artist@example.com", content: input };

    try {
      await axios.post("http://localhost:5001/api/messages/send", newMessage);
      setMessages([...messages, newMessage]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
      <div className="h-[250px] overflow-y-auto border p-2 mb-2 bg-gray-100 rounded-md flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === user.email ? "justify-end" : "justify-start"}`}>
            <span className={`p-2 rounded-lg ${msg.sender === user.email ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;