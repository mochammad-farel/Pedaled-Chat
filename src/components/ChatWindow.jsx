import { VStack, Box, Text } from "@chakra-ui/react";

export default function ChatWindow({ messages }) {
  if (!messages.length) return null;

  return (
    <VStack
      w="100%"
      maxW="720px"
      spacing={4}
      mb={8}
      align="stretch"
    >
      {messages.map((m, i) => (
        <Box
          key={i}
          alignSelf={m.role === "user" ? "flex-end" : "flex-start"}
          bg={m.role === "user" ? "green.900" : "gray.800"}
          px={4}
          py={3}
          borderRadius="lg"
          maxW="85%"
        >
          <Text fontSize="sm">{m.content}</Text>
        </Box>
      ))}
    </VStack>
  );
}
