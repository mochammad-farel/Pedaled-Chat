import { VStack, Text } from "@chakra-ui/react";

export default function BrandHeader() {
  return (
    <VStack spacing={2} mb={10}>
      <Text fontSize="3xl" fontWeight="bold">
        AI Bicycle Assistant
      </Text>
      <Text fontSize="sm" color="gray.400">
        Your smart cycling companion
      </Text>
    </VStack>
  );
}
