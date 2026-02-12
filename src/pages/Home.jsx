import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { useChat } from "../hooks/useChat";

export default function Home() {
  const { messages, sendUserMessage, loading } = useChat();

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>AI Bicycle Assistant</h2>
      <ChatWindow messages={messages} loading={loading} />
      <ChatInput onSend={sendUserMessage} disabled={loading} />
    </div>
  );
}
