import Navbar from "./Navbar";
import Footer from "./Footer";
import {Button, useColorMode} from "@chakra-ui/react";



const Layout = ({ children}) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <div className="content">     
            <title>FXAM</title>
            <Navbar />
            {/* <div class="flex justify-center mt-6">
                <div class="cursor-pointer bg-slate-300 hover:bg-slate-600 w-96 rounded-xl ease-in duration-300">
                    <a class="text-gray-800 hover:text-gray-300" onClick={toggleColorMode}>
                        คุณมองไม่เห็นหรอ ? <br/>
                        อาจเพราะความหล่อเท่ของคุณมันเจิดจ้าเกินไป<br/>
                        ลองกดปุ่มนี้ดูสิ!
                    </a>
                </div>
            </div> */}
            
            
            {children}
            <div class="mt-20"></div>
            <Footer />
        </div>
    );
}

export default Layout;