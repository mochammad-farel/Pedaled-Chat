console.log("CHAT PAGE LOADED");
import { useState } from "react";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../api/ChatApi";

export default function ChatPage() {

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text) => {

    const userMessage = {
      role: "user",
      content: text
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {

      const data = await sendMessage(text);

      console.log("API RESPONSE:", data);

      const botMessage = {
        role: "assistant",
        content: data.response
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {
      console.error(err);
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* chat message list */}
      <div>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
      </div>

      <ChatInput
        onSend={handleSend}
        isLoading={isLoading}
      />
    </>
  );
}