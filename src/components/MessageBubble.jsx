import { Box } from "@chakra-ui/react";

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      my={3}
    >
      <Box
        px={5}
        py={3}
        borderRadius="xl"
        maxW="60%"
        bg={isUser ? "#2F855A" : "#1A202C"}   // pakai HEX biar pasti
        sx={{ color: "#FFFFFF !important" }}  // override keras
      >
        {content}
      </Box>
    </Box>
  );
}
