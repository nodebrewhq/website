import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Flex
        p="6"
        bg="#F5F5F5"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        w="100%"
      >
        <Box
          mx="4"
          mb={isLargerThan768 ? "0" : "2"}
          width={{ base: "100%", sm: "auto" }}
        >
          <img
            src="files/images/logo.png"
            alt="Logo"
            style={{ width: "50px" }}
          />
        </Box>
        {isLargerThan768 ? (
          <Box>
            <Flex alignItems="center">
              <Link mr="4" color="black" href="/">
                Home
              </Link>
              <Link mr="4" color="black" href="/about">
                About
              </Link>
              <Link mr="4" color="black" href="/services">
                Services
              </Link>
              <Menu>
                <MenuButton as={Link} bg="#F5F5F5" color="black">
                  More
                </MenuButton>
                <MenuList bg="#F5F5F5">
                  <MenuItem
                    bg="#F5F5F5"
                    color="black"
                    as={Link}
                    href="/contact"
                  >
                    Contact
                  </MenuItem>
                  <MenuItem bg="#F5F5F5" color="black" as={Link} href="/faq">
                    FAQ
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        ) : (
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={toggleDrawer}
            bg="#F5F5F5"
            color="black"
          />
        )}
      </Flex>

      {/* Drawer Component for Mobile View */}
      <Drawer placement="top" onClose={toggleDrawer} isOpen={showDrawer}>
        <DrawerOverlay />
        <DrawerContent bg="#F5F5F5">
          <DrawerCloseButton top="1rem" right="1rem" color="black" />
          <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
          <DrawerBody>
            <Flex direction="column" alignItems="center">
              <Link mb="2" color="black" href="/">
                Home
              </Link>
              <Link mb="2" color="black" href="/about">
                About
              </Link>
              <Link mb="2" color="black" href="/services">
                Services
              </Link>
              <Link mb="2" color="black" href="/contact">
                Contact
              </Link>
              <Link mb="2" color="black" href="/faq">
                FAQ
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box borderBottom="1px solid #ccc" />
    </>
  );
};

export default Navbar;
