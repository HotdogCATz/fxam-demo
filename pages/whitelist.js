import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

const avatars = [
  {
    name: "Litthapong Ehinaromrat",
    url: "../public/image/bot.png",
  },
  {
    name: "Tutichai Fsasf",
    url: "",
  },
  {
    name: "Hent Eodds",
    url: "",
  },
  {
    name: "Erosper Xtemuyiwa",
    url: "",
  },
  {
    name: "Ahristian Mwamba",
    url: "",
  },
];

const { log } = console;
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
></meta>;
export default function JoinOurTeam() {
  const [email, setEmail] = useState();
  const [firstname, setFName] = useState();
  const [lastname, setLName] = useState();
  const [birthdate, setBd] = useState();
  const [sex, setGender] = useState();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // let currentDate = `${year}-${month}-${day}`;
  let currentDate = "2013-01-01";
  // currentDate = currentDate.toString()
  let isDisable = true;

  // log("Email: ", email);
  // log("fname: ", firstname);
  // log("lname: ", lastname);
  // log("bd: ", birthdate);
  // log("gender: ", sex);

  // log("currentDate: ",typeof currentDate);

  if (firstname && lastname && email && birthdate && sex) {
    isDisable = false;
  }

  const handelSumit = async (event) => {
    // event.preventDefault();

    const whitelistPayload = {
      firstname,
      lastname,
      email,
      sex,
      birthdate: birthdate,
    };
    //test
    try {
      const { data } = await axios({
        url: "https://fxam-go-3b7095ce4e56.herokuapp.com/wl",
        method: "POST",
        data: whitelistPayload,
      });
    } catch (error) {
      log("Err", error);
    }
  };

  const router = useRouter();

  const handleRedirect2Thx = () => {
    router.push("/thx");
  };

  return (
    <>
      {/* <Head>
        <title>FXAM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head> */}
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              Join White List Now!{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                Use FXAM Free for One Year
              </Text>{" "}
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, red.400,pink.400)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Join WHITE LIST
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                ลงทะเบียน White List กับ FXAM วันนี้
                รับสิทธิ์ทำข้อสอบและรับผลการวิเคราะห์ฟรี หนึ่งปีเต็ม โดย FXAM
                จะส่ง Active Code ให้ผ่าน Email
                ที่ลงทะเบียนเมื่อระบบเปิดตัวในอีกไม่นานนี้
              </Text>
            </Stack>
            {/* ------------------------------- INPUT FORM -------------------------------------- */}
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="FirstName"
                  value={firstname}
                  onChange={({ target }) => setFName(target?.value)}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  placeholder="LastName"
                  value={lastname}
                  onChange={({ target }) => setLName(target?.value)}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />

                <Input
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={({ target }) => setEmail(target?.value)}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />

                <Select
                  placeholder="Choose your gender"
                  rightIcon={<ChevronDownIcon />}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  onChange={({ target }) => setGender(target?.value)}
                  _placeholder={{
                    color: "gray.500",
                  }}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="not2Ans">Perfer not to Answer</option>
                </Select>
                {/* ------------ birth date------------------ */}
                {/* <p color={"blue.500"}>dfdfdf</p> */}
                <Text color={"gray.500"}>Select Birthdate Below</Text>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  // max = '2023-07-24'
                  max={currentDate}
                  type="date"
                  rightIcon={<ChevronDownIcon />}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  onChange={({ target }) => setBd(target?.value)}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />

                {/* ------------end birth date------------------ */}
              </Stack>
              <Button
                // onClick={handelSumit,handleClick}
                isDisabled={isDisable}
                onClick={() => {
                  handelSumit();
                  handleRedirect2Thx();
                }}
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
            </Box>
            {/* -------------------------------END INPUT FORM -------------------------------------- */}
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(150px)" }}
        />
      </Box>
    </>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
