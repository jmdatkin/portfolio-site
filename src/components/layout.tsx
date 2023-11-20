import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import Navbar from "./navbar";
import { ThemeContext, Themes } from "@/pages/_document";

function Layout({children}) {

    const router = useRouter();

    const [theme, setTheme] = useContext(ThemeContext);

    return ( 
        <>
         <div className={`w-full h-full  `}>
          <div className="flex flex-col h-full">
            <div className="flex min-h-[5rem] border-b">
              <div className="w-screen-layout-offset border-r hidden 3xl:block theme-responsive-bg"></div>
              <div className="flex-grow items-center theme-responsive-bg">
                <Navbar></Navbar>
              </div>
              <div className="w-screen-layout-offset border-l hidden 3xl:block theme-responsive-bg"></div>
            </div>
            <div className="flex flex-grow">
              <div className="w-screen-layout-offset border-r hidden 3xl:block theme-responsive-bg"></div>
              <main className={`flex-grow overflow-hidden relative theme-responsive-bg`}>
                {children}
              </main>
              <div className="w-screen-layout-offset border-l hidden 3xl:block theme-responsive-bg"></div>
            </div>
            <div className="flex min-h-[5rem] border-t theme-responsive-bg">
              <div className="w-screen-layout-offset border-r hidden 3xl:block theme-responsive-bg"></div>
              <div className="flex-grow flex flex-col text-center h-full items-center justify-around"><span className="text-zinc-600">2023 Julian Atkin</span></div>
              <div className="w-screen-layout-offset border-l hidden 3xl:block theme-responsive-bg"></div>
            </div>
          </div>
        </div>
        </>
     );
}

export default Layout;