import Image from "next/image";
import styles from "/styles/Footer.module.css";
import ButtonC from "./ButtonC";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/fxamLogoW.png" alt="Logo" width={148} height={35} />
        </div>
        <div className={styles.buttons}>
          <div>
            <ButtonC buttonText="Home" href="/" />
          </div>
          <div>
            <ButtonC buttonText="STL Demo" href="/bmdetail" />
          </div>
          <div>
            <ButtonC buttonText="Whitelist" href="/whitelist" />
          </div>
        </div>
        <p className={styles.text}>Let's F the Exam ! </p>
      </div>
    </footer>
  );
};

export default Footer;
