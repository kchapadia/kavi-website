import React from 'react';
import {Box, Link, VStack, HStack, SlideFade, IconButton, Drawer, DrawerOverlay, DrawerContent, useDisclosure} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SidebarNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Mobile Sidebar */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton 
          icon={<HamburgerIcon />} 
          onClick={onOpen}
          position="fixed"
          top="1rem" 
          right="1rem"
          zIndex={10}
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          boxShadow="0px 0px 15px rgba(0, 0, 0, 0.2)"
          size="lg"
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent bg="purple.700" py={8} px={5}>
              <VStack spacing={8} align="end" mt={8} fontSize="xl">
                {/* Mobile Links */}
                <Link href="#home" color="purple.200" fontWeight="bold" onClick={onClose} _hover={{ color: 'purple.900', textDecoration: 'none' }}>
                  /.home
                </Link>
                <Link href="#about" color="purple.200" fontWeight="bold" onClick={onClose} _hover={{ color: 'purple.900', textDecoration: 'none' }}>
                  /.about.me
                </Link>
                <Link href="#experience" color="purple.200" fontWeight="bold" onClick={onClose} _hover={{ color: 'purple.900', textDecoration: 'none' }}>
                  /.experience
                </Link>
              </VStack>
              <VStack spacing={8} align="end" mt={8} fontSize="xl">
              <HStack spacing={7} align="start" ml={2} mt={6}>
                {/* Mobile Icons */}
                <Link href="mailto:contact@kavi.codes" _hover={{ textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" color="#D6BCFA" className="icon-hover" />
                </Link>
                <Link href="https://github.com/kchapadia" _hover={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" color="#D6BCFA" className="icon-hover" />
                </Link>
                <Link href="https://www.linkedin.com/in/kchapadia/" _hover={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="#D6BCFA" className="icon-hover" />
                </Link>
              </HStack>
              </VStack>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>

      {/* Desktop Sidebar */}
      <Box 
        position="fixed" 
        bottom="2rem" 
        right="2rem"
        zIndex={10}
        display={{ base: 'none', md: 'block' }}>
        <VStack spacing={2} align="end">
          <SlideFade in={true} offsetY="60px" delay={0.4}>
            <Link href="#home" color="purple.700" fontWeight="bold" _hover={{ color: 'purple.900', textDecoration: 'none' }}>
              /.home
            </Link>
          </SlideFade>
          <SlideFade in={true} offsetY="60px" delay={0.45}>
            <Link href="#about" color="purple.700" fontWeight="bold" _hover={{ color: 'purple.900', textDecoration: 'none' }}>
              /.about.me
            </Link>
          </SlideFade>
          <SlideFade in={true} offsetY="60px" delay={0.5}>
            <Link href="#experience" color="purple.700" fontWeight="bold" _hover={{ color: 'purple.900', textDecoration: 'none' }}>
              /.experience
            </Link>
          </SlideFade>
        </VStack>
        <HStack spacing={4} align="end" ml={2} mt={4}>
          <SlideFade in={true} offsetY="60px" delay={0.65}>
            <Link href="mailto:contact@kavi.codes" _hover={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="#553C9A" className="icon-hover" />
            </Link>
          </SlideFade>
          <SlideFade in={true} offsetY="60px" delay={0.7}>
          <Link href="https://github.com/kchapadia" _hover={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" color="#553C9A" className="icon-hover" />
            </Link>
          </SlideFade>
          <SlideFade in={true} offsetY="60px" delay={0.75}>
            <Link href="https://www.linkedin.com/in/kchapadia/" _hover={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#553C9A" className="icon-hover" />
            </Link>
          </SlideFade>
        </HStack>
      </Box>
    </>
  );
};

export default SidebarNav;
