import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  ImageChakra,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import Head from "next/head";
import Image from "next/image";
import ImageFallback from "/components/ImageFallback";
import ButtonC from "/components/ButtonC";
import styles from "/styles/Home.module.css";


export default function Home({ formattedDate }) {
  const THREE_DAYS_IN_MS = 17 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
    <div class="">
    <Head>
        <title>FXAM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Check out AWESOME exam system" 
          key="desc"
        />
      </Head>

      {/* <div class="flex justify-center mt-6">
                <div class="cursor-pointer bg-slate-300 hover:bg-slate-600 w-96 rounded-xl ease-in duration-300">
                    <a class="text-gray-800 hover:text-gray-300" onClick={toggleColorMode}>
                        คุณมองไม่เห็นหรอ ? <br/>
                        อาจเพราะความหล่อเท่ของคุณมันเจิดจ้าเกินไป<br/>
                        ลองกดปุ่มนี้ดูสิ!
                    </a>
                </div>
            </div> */}

      <div class="max-w-1440px sm:mx-auto sm:my-auto">
        <div style={{ width: "auto", height: "750px" }}>
          <div className={styles.headBoxContainer} >
            <div className={styles.headContainer}>
              <Image
                class="sm:scale-100  scale-75 mt-12 sm:justify-items-center sm:content-center "
                src="/fxamLogo.png"
                alt="FXAM Logo"
                width={673}
                height={185}
              />
              <div className={styles.textSection}>
                <div className={styles.textSectionUnderLogo}>
                  <p class="mt-2">Digital Service Exam Platform</p>
                </div>
                <div className={styles.textSectionSpan}>
                  {/* <p class="mt-1">
                  your lowest score will <br></br>higher than the standard line.
                  </p> */}
                  <p class="mt-1">
                  คลังข้อสอบที่รองรับหลากหลายการสอบทั้งไทยและต่างประเทศ <br></br>
                  พร้อมกับผล Data Analytics ที่จะช่วยให้คุณเข้าใจจุดแข็ง จุดอ่อน และแนวทางในการพัฒนาตนเอง
                  </p>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.button}>
                  <ButtonC
                    buttonText="WHITELIST"
                    href="/whitelist"
                    width="183px"
                    height="48px"
                    textColor="#fff"
                    bgColor="#022859"
                    borderColor="#022859"
                  />
                </div>
                <div className={styles.button2}>
                  <ButtonC
                    buttonText="STL Demo Game"
                    href="/bmdetail"
                    width="136px"
                    height="48px"
                    borderColor="#022859"
                  />
                </div>
              </div>
            </div>
            <div>
              <ImageFallback
                className="absolute bottom-0 left-0 z-[-1] w-full"
                src="/images/banner-bg-shape.svg"
                width={1905}
                height={295}
                alt="banner-shape"
                priority
              />
            </div>
            <div>
              {/* <div style={{ display:'flex', justifyContent: 'end', marginRight:'100px'}} >
                  <div style={{ justifyContent: 'center', marginTop: '200px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <p style={{ textAlign: 'center', fontSize:'36px', fontWeight:'bold'}}>Demo day countdown</p>
                      <div style={{ marginTop: '20px',  }}>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                      </div>
                    </div>
                  </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div
          className={styles.about}
          style={{ fontSize: "42px", fontWeight: "bold" }}
        >
          About FXAM
        </div>
        <div className={styles.mobileImageContainer}>
          <div className={styles.mobileImage}>
            <Image
              src="/images/handWrite.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className={styles.containerStyle}>
          <StateBox
            head=""
            stateText="ผลวิเคราะห์ที่จะเติมไฟในตัวคุณ"
            description1="ทำข้อสอบแล้วรู้แค่คะแนน มันตกยุคไปแล้ว"
            description2="เจอกับผลสอบที่จะทำให้คุณรู้จักกับตัวเองมากขึ้น พบเจอ"
            subDescription2="แนวทางในการพัฒนา ปลดล็อค Acivment ไปกับเรา"
            // reverse={false}
            backgroundImage="/images/handWrite.png"
          />
          <div className={styles.image}>
            <Image
              src="/images/handWrite.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className={styles.mobileImageContainer}>
          <div className={styles.mobileImage}>
            <Image
              src="/images/bot.png"
              width={400}
              height={392}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className={styles.containerStyle}>
          <StateBox
            head=""
            stateText="ข้อสอบมากมาย"
            description1="ตั้งแต่ข้อสอบ Google Cert, MS Cert, Ielts, Tofel, O-net,"
            subDescription1="ข้อสอบวัดบุคลิกภาพ ตลอดจนข้อสอบ แฟนพันธ์แท้อนิเมะ หรือศิลปินที่คุณชอบ"
            description2="คุณสามารถพบ หรือ เข้ามาสร้างเองได้ที่ FXAM"
            reverse={true}
            // backgroundImage="/images/bot.png"
          />
          <div className={styles.reverseImage}>
            <Image
              src="/images/bot.png"
              width={400}
              height={392}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className={styles.mobileImageContainer}>
          <div className={styles.mobileImage}>
            <Image
              src="/images/Design.png"
              width={500}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className={styles.containerStyle} style={{ marginTop: "5em" }}>
          <StateBox
            head=""
            stateText="สร้างข้อสอบ และ รับเงิน!"
            description1="ลองนึกดู คุณเข้ามาสร้างข้อสอบเกี่ยวกับตัวละครในเกมที่คุณชอบ"
            subDescription1="และคนที่ชอบเหมือนคุณมากมายเข้ามาเจอมัน"
            description2="คุณจะได้ส่วนแบ่งรายได้โฆษณาจาก FXAM ไปเลยฟรี ๆ !"
            // reverse={false}
            // backgroundImage="/images/Design.png"
          />

          <div className={styles.image}>
            <Image
              src="/images/Design.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div> */}
      </div>
    </div>
      
    </>
  );
}

export async function getStaticProps() {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(Date.now());

  return { props: { formattedDate } };
}