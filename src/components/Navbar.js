import React, { useState } from 'react';
import { Box, Flex, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, useMediaQuery, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <Flex p="6" bg="#F5F5F5" alignItems="center" justifyContent="space-between" flexWrap="wrap"> {/* Added justifyContent and adjusted flexWrap */}
        <Box mx="4" mb={isLargerThan768 ? "0" : "2"} width={{ base: "100%", sm: "auto" }}>
          <img src="files/images/logo.png" alt="Logo" style={{ width: '50px' }} />
        </Box>
        <Spacer />
        {isLargerThan768 ? ( // Display links only on screens larger than 768px
          <Box width={{ base: "100%", sm: "auto" }}>
            <Flex alignItems="center">
              <Link mr="4" color="black" href="/">Home</Link>
              <Link mr="4" color="black" href="/about">About</Link>
              <Link mr="4" color="black" href="/services">Services</Link>
              <Menu>
                <MenuButton bg="#F5F5F5" color="black">More</MenuButton>
                <MenuList bg="#F5F5F5">
                  <MenuItem bg="#F5F5F5" color="black" as={Link} href="/contact">Contact</MenuItem>
                  <MenuItem bg="#F5F5F5" color="black" as={Link} href="/faq">FAQ</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        ) : (
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={toggleLinks}
            bg="#F5F5F5"
            color="black"
          />
        )}
        {showLinks && !isLargerThan768 && ( // Show links only on smaller screens when toggled
          <Box width="100%" mt="4">
            <Flex direction="column" alignItems="center">
              <Link mb="2" color="black" href="/">Home</Link>
              <Link mb="2" color="black" href="/about">About</Link>
              <Link mb="2" color="black" href="/services">Services</Link>
              <Link mb="2" color="black" href="/contact">Contact</Link>
              <Link mb="2" color="black" href="/faq">FAQ</Link>
            </Flex>
          </Box>
        )}
      </Flex>
      <Box borderBottom="1px solid #ccc" />
    </>
  );
}

export default Navbar;
