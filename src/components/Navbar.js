import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex
        p={4}
        bg={colorMode === "dark" ? "gray.800" : "gray.100"}
        alignItems="center"
      >
        <Box>
          <img
            src="files/images/logo.png"
            alt="Logo"
            style={{ width: "50px" }}
          />
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }}>
          <Flex alignItems="center">
            <Link
              mr={6}
              color={colorMode === "dark" ? "white" : "black"}
              href="/"
            >
              Home
            </Link>
            <Link
              mr={6}
              color={colorMode === "dark" ? "white" : "black"}
              href="/about"
            >
              About
            </Link>
            <Link
              mr={6}
              color={colorMode === "dark" ? "white" : "black"}
              href="/services"
            >
              Services
            </Link>
            <Link
              mr={6}
              color={colorMode === "dark" ? "white" : "black"}
              href="/contact"
            >
              Contact
            </Link>
            <Link
              mr={6}
              color={colorMode === "dark" ? "white" : "black"}
              href="/faq"
            >
              FAQ
            </Link>
          </Flex>
        </Box>
        <Box display={{ base: "flex", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={handleToggle}
          />
        </Box>
      </Flex>
      <Drawer placement="left" onClose={handleToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode === "dark" ? "gray.800" : "gray.100"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" alignItems="center" mt={8}>
              <Link href="/">Home</Link>
              <Link href="/about" mt={4}>
                About
              </Link>
              <Link href="/services" mt={4}>
                Services
              </Link>
              <Link href="/contact" mt={4}>
                Contact
              </Link>
              <Link href="/faq" mt={4}>
                FAQ
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
