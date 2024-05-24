import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [posts, setPosts] = useState([
    {
      title: "Welcome to My Blog",
      excerpt: "This is the first post on my new blog. Stay tuned for more updates!",
      date: "October 1, 2023",
    },
    {
      title: "Another Day, Another Post",
      excerpt: "Here's another update on what's been happening lately.",
      date: "October 2, 2023",
    },
  ]);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Box flex="3">
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.excerpt}</Text>
                <Text mt={4} fontSize="sm" color="gray.500">
                  {post.date}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="lg" mb={4}>
            About Me
          </Heading>
          <Text>
            Hi, I'm a blogger who loves to write about various topics. Follow my blog to stay updated with my latest posts.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;