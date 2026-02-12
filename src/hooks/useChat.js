import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Saya AI Bicycle Assistant 🚴‍♂️" }
  ]);

  const sendMessage = (text) => {
    const userMsg = { role: "user", content: text };

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        role: "assistant",
        content: "Terima kasih! Saya sedang memproses jawaban kamu 😊"
      }
    ]);
  };

  return { messages, sendMessage };
}
