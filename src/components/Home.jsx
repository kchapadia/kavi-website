import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, VStack, SlideFade, Link, Center, keyframes } from '@chakra-ui/react';
import { EmailIcon, TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

const CustomSlideFade = ({ children }) => {
  return (
    <SlideFade in={true} offsetY="20px" delay={0.2}>
      {children}
    </SlideFade>
  );
};

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home = () => {
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowDownArrow(false);
      } else {
        setShowDownArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box id="home"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-t, purple.100, purple.300)"
      color="purple.800"
      position="relative"
      px={{ base: "2rem", md: "12rem", lg: "28rem" }}
    >
      <VStack spacing={6}>
        <CustomSlideFade>
          <Heading 
            as="h1" 
            size="2xl" 
            bgGradient='linear(to-l, #4776E6, #8E54E9, #4776E6)' 
            bgSize="200% 100%" 
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
            animation={`${gradientAnimation} 3s infinite`} 
          >
            Hi, Kavi here!
          </Heading>
        </CustomSlideFade>
        <CustomSlideFade>
          <Text fontSize="xl">
            I'm a consultant specializing in Insights & Data.
          </Text>
        </CustomSlideFade>
        <CustomSlideFade>
          <Link href="mailto:contact@kavi.codes" _hover={{ textDecoration: 'none' }}>
            <Button 
              leftIcon={<EmailIcon />}
              colorScheme='purple' 
              size="lg"
              _hover={{ backgroundColor: 'purple.600', transform: 'scale(1.2)' }}
              transition="all 0.3s ease"
            >
              Say Hi!
            </Button>
          </Link>
        </CustomSlideFade>
      </VStack>
      <Center position="absolute" bottom="8%" width="100%">
        <Link href={showDownArrow ? "#about" : "#home"} _hover={{ textDecoration: 'none' }}>
          <CustomSlideFade>
            {showDownArrow ? 
              <TriangleDownIcon boxSize={10} color="purple.500" _hover={{ color: 'purple.600', transform: 'scale(1.2)' }} transition="all 0.3s ease" /> :
              <TriangleUpIcon boxSize={10} color="purple.500" _hover={{ color: 'purple.600', transform: 'scale(1.2)' }} transition="all 0.3s ease" />
            }
          </CustomSlideFade>
        </Link>
      </Center>
    </Box>
  );
};

export default Home;
