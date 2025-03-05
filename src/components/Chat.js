import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log("Input value changed:", e.target.value);  // Log input value
    setInput(e.target.value);  // Update the input state
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { user: "You", text: input }]);
    setInput(""); // Clear input field after sending
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
      {/* Chat Messages Display */}
      <div className="h-[250px] overflow-y-auto border p-2 mb-2 bg-gray-100 rounded-md flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start">
            <span className="font-bold text-gray-700 mr-2">{msg.user}:</span>
            <span className="text-gray-800">{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Chat Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-black"
          placeholder="Type your message..."
          value={input}
          onChange={handleChange}
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