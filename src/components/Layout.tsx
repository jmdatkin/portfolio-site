// import { ReactNode } from "react";

import { useRouter } from "next/router";
import { MutableRefObject, useRef, useState } from "react";
import Navbar from "./Navbar";

function Layout({children}) {

    const router = useRouter();

    const themes = useRef({
        '/': 'bg-white',
        '/about': 'bg-blue-300 border-blue-600',
    });

    const [darkMode, setDarkMode] = useState(false);

    return ( 
        <>
         <div className={`w-full h-full bg-white ${darkMode ? 'dark' : ''}`}>
          <div className="flex flex-col h-full">
            <div className="flex min-h-[5rem] border-b">
<<<<<<< HEAD
              <div className="w-screen-layout-offset border-r hidden md:block bg-zinc-100"></div>
              <div className="flex-grow items-center">
                <Navbar setDarkMode={setDarkMode}></Navbar>
=======
              <div className="w-screen-layout-offset border-r hidden 3xl:block bg-zinc-100"></div>
              <div className="flex-grow bg-white items-center">
                <Navbar></Navbar>
>>>>>>> main
              </div>
              <div className="w-screen-layout-offset border-l hidden 3xl:block bg-zinc-100"></div>
            </div>
            <div className="flex flex-grow">
<<<<<<< HEAD
              <div className="w-screen-layout-offset border-r hidden md:block bg-zinc-100"></div>
              <main className={`flex-grow bg-white relative`}>
=======
              <div className="w-screen-layout-offset border-r hidden 3xl:block bg-zinc-100"></div>
              <main className={`flex-grow overflow-hidden relative bg-white`}>
>>>>>>> main
                {children}
              </main>
              <div className="w-screen-layout-offset border-l hidden 3xl:block bg-zinc-100"></div>
            </div>
            <div className="flex min-h-[5rem] bg-white border-t">
              <div className="w-screen-layout-offset border-r hidden 3xl:block bg-zinc-100"></div>
              <div className="flex-grow flex flex-col text-center h-full items-center justify-around"><span className="text-zinc-600">2023 Julian Atkin</span></div>
              <div className="w-screen-layout-offset border-l hidden 3xl:block bg-zinc-100"></div>
            </div>
          </div>
        </div>
        </>
     );
}

export default Layout;