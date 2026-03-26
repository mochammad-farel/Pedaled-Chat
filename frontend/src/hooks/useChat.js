import { useState } from "react";
import { sendMessage as sendApiMessage } from "../api/ChatApi";

export function useChat() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {

    console.log("HOOK SEND MESSAGE:", text);
    
    const userMessage = {
      role: "user",
      content: text
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {

      const data = await sendApiMessage(text);

      const botMessage = {
        role: "assistant",
        content: data.response
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return {
    messages,
    sendMessage,
    loading
  };
}