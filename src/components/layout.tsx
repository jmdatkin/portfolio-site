import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import Navbar from "./navbar";
import { ThemeContext, Themes } from "@/pages/_document";

function Layout({ children }) {

  const router = useRouter();

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <div className={`w-full h-full flex items-center justify-center theme-responsive-bg`}>
        <div className="flex flex-col h-full w-full z-[100] relative">
          {/* Header */}
          <div className="flex min-h-[5rem] border-b z-[100] sticky">
            <div className="flex-grow items-center">
              <Navbar></Navbar>
            </div>
          </div>
          {/* Main */}
          <div className="flex flex-grow">
            <main className={`flex-grow relative`}>
              {children}
            </main>
          </div>
          {/* Footer */}
          <div className="flex min-h-[5rem] border-t theme-responsive-bg">
            <div className="flex-grow flex flex-col text-center h-full items-center justify-around"><span className="text-zinc-600">2023 Julian Atkin</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;