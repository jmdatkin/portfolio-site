import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function Navbar() {

    const router = useRouter();

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const links = useRef([
        {
            name: "Home",
            href: "#home",
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Resume",
            href: "#resume"
        },
        // {
        //     name: "About",
        //     href: "/about"
        // }
    ]);

    return (
        <>
            <nav className="hidden sticky z-[9000] sm:flex h-full flex items-center px-3 justify-around md:justify-start">
                {links.current.map((link, idx) => {
                    // const active = router.pathname === link.href;
                    const re = new RegExp(`^${link.href}(/.+)?$`);
                    const active = re.test(router.pathname);
                    return <Link key={idx} className={`${active ? 'text-zinc-900 dark:text-zinc-100!' : 'text-zinc-400 dark:text-zinc-600'} block p-4 grow md:grow-0 h-full flex items-center hover:text-zinc-900 dark:hover:text-zinc-200 font-semibold  duration-[0.07s]`} href={link.href}>{link.name}</Link>
                })}
            </nav>
            <div className="sm:hidden flex items-center h-full px-3 ">
                <button className="text-3xl border border-transparent hover:border-zinc-200 p-2 px-3 mx-1 active:bg-zinc-100 rounded" onClick={() => setMobileNavOpen(!mobileNavOpen)}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
            </div>
            <div className={`${mobileNavOpen ? 'pointer-events-auto scale-100 opacity-1' : 'pointer-events-none scale-95 opacity-0'} fixed z-[9990] h-full w-full theme-responsive-bg sm:hidden transition-all ease duration-[0.4s]`}>
                <nav className={`relative z-[9000] flex h-full w-full flex flex-col text-2xl`}>
                    {links.current.map((link, idx) => {
                        // const active = router.pathname === link.href;
                        const re = new RegExp(`^${link.href}(/.+)?$`);
                        const active = re.test(router.pathname);
                        return <Link onClick={() => setMobileNavOpen(false)} key={idx} className={`${active ? 'text-zinc-900' : ''} block p-4 flex items-center focus-visible:bg-zinc-100 font-semibold text-zinc-400 duration-[0.07s]`} href={link.href}>{link.name}</Link>
                    })}
                </nav>
            </div>
        </>
    );
}

export default Navbar;