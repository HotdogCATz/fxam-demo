import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { useRouter } from 'next/router';
  import { Center } from '@chakra-ui/react'
  
  
  
  export default function thx() {
    const router = useRouter();
  
    const handleBack2whitelist = () => {
      router.push('/whitelist');
    };
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                ขอบคุณนะ ที่สนใจกัน
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                "สนใจมาลง White List กับเราไหม"<br></br>
              </Text>{" "}
            </Heading>
            <Flex flex={1}>
              <Image
                src="/Smiling2.png"
                width={500}
                height={300}
                alt="Picture of the author"
              />
            </Flex>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              คุณจะสามารถเข้าถึงข้อสอบอะไรก็ตามที่คุณต้องการ ฝึกฝนกับมันจนชำนาญ
              <br></br>รับผลวิเคราะห์ จุดแข็ง จุดอ่อน และ แนวทางพัฒนาฟรีๆหนึ่งปีเต็ม
               <br></br>
            </Text>
            <Center>
            <Stack direction={{ base: "column", md: "row" }} spacing={1}>
              <Button
              onClick={() => {
                handleBack2whitelist();
              }}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                ลงทะเบียน
              </Button>
              {/* <Button rounded={"full"}>How FXAM Works</Button> */}
            </Stack>
            </Center>
          </Stack>
        </Flex>
      </Stack>
    );
  }
  