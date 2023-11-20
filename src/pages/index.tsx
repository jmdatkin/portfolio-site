import Head from 'next/head'
import Image from 'next/image'
import { IBM_Plex_Mono, Inter, Permanent_Marker } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/project'
import Portrait from '@/components/portrait'
import SocialButtons from '@/components/social-buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUpRightFromSquare, faFaceSmile, faFile, faPenRuler, faPerson } from '@fortawesome/free-solid-svg-icons'
import Animated from '@/components/animated'
import Link from 'next/link'
import { FaGears, FaCode } from "react-icons/fa6";
import { BsLayersFill } from "react-icons/bs";
import BackgroundVisualization from '@/components/background-visualization'
import ButtonLink from '@/components/button-link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400", "500"] });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" });

export default function Home() {

  const portraitSectionRef = useRef(null);

  return (
    <>
      <Animated>
        <Head>
          <title>Julian Atkin | Full Stack Engineer</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BackgroundVisualization></BackgroundVisualization>
        <div className="w-full z-[100] snap-y">
          <section className="w-full h-screen relative snap-center">
            <div className='w-full h-full absolute bg-gradient-to-t from-black z-[-1]'></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full p-4 md:p-24'>
              {/* <div className='flex w-full h-full z-[100] relative'> */}
              <div className="flex flex-col justify-center items-center mb-16">
                <AnimatePresence>
                  <motion.div className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ ease: "easeOut", delay: 0.2 }}
                  >
                    <div className="text-center md:text-left leading-loose flex flex-col gap-2">
                      <h4 className={`uppercase tracking-tight dark:text-zinc-500 ${ibmPlexMono.className}`}>Hi, I'm Julian. I offer:</h4>
                      <div className="">
                      <h1 className="leading-tight [font-size:clamp(2rem,3.5vw,4.5rem)]"><span className="dark:bg-zinc-100 dark:text-zinc-900">Premium</span> full stack services.</h1>
                      <h1 className="leading-tight [font-size:clamp(2rem,3.5vw,4.5rem)]">Reliable, <span className={`${permanentMarker.className} text-emerald-400 dark:text-yellow-400`}>blazing fast </span> applications.</h1>
                      <h1 className="leading-tight [font-size:clamp(2rem,3.5vw,4.5rem)]">Stunning bespoke designs.</h1>
                      </div>
                      {/* <h1 className="leading-none text-center md:leading-tight md:text-left">Full stack development services. Clean, performant code. Stunning design.</h1> */}
                      <div className="flex py-8 gap-4">
                        <ButtonLink href="/about">Work with me</ButtonLink>
                        <ButtonLink href="#projects">Get in touch</ButtonLink>
                      </div>
                    </div>
                  </motion.div>

                </AnimatePresence>
              </div>
              <div></div>
            </div>
          </section>
          <section ref={portraitSectionRef} className="w-full flex flex-col items-center bg-black snap-start p-16" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-12 p-18">
              <motion.div className="relative w-[400px] h-[400px] rounded-full saturate-[.75]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <Portrait className="rounded-full"></Portrait>
              </motion.div>
              <div className="flex flex-col justify-center">
                <h2>Hi! I'm Julian.</h2>
                <p>I have over six years of web development experience.</p>

                <div className="py-4 border-b border-dotted">
                  <span className="flex items-center gap-4">
                    <FaChevronRight></FaChevronRight>
                    <Link className="text-xl" href="/resume">Check out my resume</Link>
                  </span>
                </div>
                <div className="py-4 border-b border-dotted flex flex-col">
                  <span className="flex items-center gap-4">
                    <FaChevronRight></FaChevronRight>
                    <h4>Connect with me</h4>
                  </span>
                  <SocialButtons></SocialButtons>
                  <span>
                    Email: jatkindev@gmail.com
                  </span>
                  <span>
                    Cell: (917)-626-7874
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-screen flex flex-col items-center bg-black snap-start p-16" id="projects">
            <h1 className="py-24">What I Do</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[24rem] p-18 px-48">
              <div className="flex flex-col items-center border-r">
                <h3 className="mb-10"><BsLayersFill size={56}></BsLayersFill></h3>
                <ul className="text-xl">
                  <li>Responsive web design</li>
                  <li>UI/UX Strategy</li>
                  <li>Prototyping</li>
                </ul>
              </div>
              <div className="flex flex-col items-center border-r">
                <h3 className="mb-10"><FaGears size={56}></FaGears></h3>
                <ul className="text-xl">
                  <li>Build <strong>fast</strong>, <strong>reliable</strong> back-end services</li>
                  <li>Rapid and aggressive iterative development</li>
                  <li>Communicate with you to translate your business needs</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="mb-10"><FaCode size={56}></FaCode></h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <ul className="text-xl">
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Node.js</li>
                  </ul>
                  <ul className="text-xl">
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div >

        {/* <header className="relative z-[100] flex flex-col w-full justify-around items-center py-4">
          <div className="flex flex-col md:w-3/4 items-center md:text-center mx-auto p-6 py-8">
            <div>
              <h1 className={`tracking-tight  text-zinc-800 dark:text-zinc-100`}>Julian Atkin</h1>
              <h2 className="mb-4 text-zinc-800 dark:text-zinc-100">Full Stack Engineer</h2>
            </div>
            <p className="my-12 animate-fade-in text-zinc-800 text-lg">Hi, I&apos;m Julian! <strong>My mission</strong> is to build accessible and usable <strong>web technologies</strong> that make the world a <strong>better place</strong>.</p>
            <div className="mb-16 flex flex-col items-center">
              <SocialButtons></SocialButtons>
            </div>
          </div>
        </header> */}

      </Animated >
    </>
  )
}
