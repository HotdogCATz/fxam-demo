import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Image from 'next/image';
import ButtonC from "./ButtonC";
import { useRouter } from 'next/router';
const Links = ["Human BM", "Detail", "Team"];



const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter();

  const handleBack2whitelist = () => {
    router.push('/whitelist');
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <a href="/">
                <Image
                  src="/fxamLogoW.png"
                  alt="Logo"
                  width={120}
                  height={37}
                />
              </a></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <ButtonC buttonText="Home" href="/" />
              <ButtonC buttonText="Benchmark" href="/bmdetail" />
              <ButtonC buttonText="Whitelists" href="/whitelist" />
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button 
              onClick={toggleColorMode}
              mr={4}>
                คุณมองไม่เห็นหรอ ? <br/>
                ลองกดปุ่มนี้ดูสิ!
            </Button> */}
            <Button
              onClick={handleBack2whitelist}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              ลงทะเบียนตอนนี้ ใช้ฟรี 1 ปี
            </Button>
        
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ButtonC buttonText="Home" href="/" />
              <ButtonC buttonText="Benchmark" href="/bmdetail" />
              <ButtonC buttonText="Whitelists" href="/whitelist" />

            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
