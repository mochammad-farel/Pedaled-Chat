import { Flex, VStack } from "@chakra-ui/react";
import { useChat } from "./hooks/useChat";
import BrandHeader from "./components/BrandHeader";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const { messages, sendMessage, loading } = useChat();

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="black"
    >
      <VStack spacing={6} w="100%">
        <BrandHeader />
        <ChatWindow messages={messages} />
        <ChatInput onSend={sendMessage} isLoading={loading} />
      </VStack>
    </Flex>
  );
}

export default App;
