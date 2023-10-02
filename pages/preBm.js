import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Center,
} from "@chakra-ui/react";
import styles from "/styles/Home.module.css";
import StateBox from "../components/StateBox";
import Image from "next/image";
import { useRouter } from "next/router";

export default function preBm() {
  const router = useRouter();

  const handleRedirect2Reacttime = () => {
    router.push("/benchmark/reactiontime");
  };
  return (
    <>
      <div>
          <div className={styles.containerStyle}>
          <StateBox
            head="เราจะมีเกมให้คุณเล่น 2 เกม"
            stateText="ทั้งสองเกมคุณไม่ต้องใช้ความรู้ใดๆ"
            description1="ใช้แค่สมาธิ"
            subDescription1="และความเท่ในตัวคุณ"
            subDescription2=""
            // reverse={false}
            // backgroundImage="/images/handWrite.png"
          />
          <div class="absolute w-full grid justify-items-stretch">
            <div class="justify-self-end mr-20">
              <Image
              className={styles.image}
                src="/Happy2.png"
                width={500}
                height={300}
                alt="Picture of the author"
              />
            </div>
          </div>
          
        </div>
        <div className={styles.mobileImageContainer}>
          <div className={styles.mobileImage}>
            <Image
              src="/Smiling2.png"
              width={400}
              height={392}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      
      <Center>
        <Stack spacing={6} direction={"row"}>
          <Button
            onClick={handleRedirect2Reacttime}
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
        </Stack>
      </Center>
    </>
  );
}
