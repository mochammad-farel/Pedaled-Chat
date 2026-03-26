import {
  Box,
  Input,
  IconButton,
  HStack
} from "@chakra-ui/react";
import { useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <Box
      w="100%"
      maxW="720px"
      bg="gray.900"
      borderRadius="full"
      px={4}
      py={2}
      boxShadow="0 0 0 1px rgba(255,255,255,0.1)"
    >
      <HStack>
        <Input
          variant="unstyled"
          placeholder="Bagaimana saya bisa membantu Anda hari ini?"
          color="white"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          fontSize="md"
          _placeholder={{ color: "gray.500" }}
          _focus={{
            borderColor: "green.400",
            boxShadow: "0 0 0 1px #38A169"
          }}
          isDisabled={isLoading}
        />
        <IconButton
          icon={<ArrowUpIcon />}
          colorScheme="green"
          borderRadius="full"
          onClick={handleSend}
          isLoading={isLoading}
        />
      </HStack>
    </Box>
  );
}
