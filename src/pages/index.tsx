import Head from 'next/head'
import Image from 'next/image'
import { IBM_Plex_Mono, Inter, Permanent_Marker } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/project'
import Portrait from '@/components/portrait'
import SocialButtons from '@/components/social-buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUpRightFromSquare, faFaceSmile, faFile, faPenRuler, faPerson } from '@fortawesome/free-solid-svg-icons'
import { IoPeople } from "react-icons/io5";
import Animated from '@/components/animated'
import Link from 'next/link'
import { FaGears, FaCode, FaRocket, FaPalette } from "react-icons/fa6";
import { FaPaintBrush } from 'react-icons/fa'
import { BsBoxFill, BsLayersFill, BsLightning, BsLightningFill } from "react-icons/bs";
import BackgroundVisualization from '@/components/background-visualization'
import ButtonLink from '@/components/button-link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'
import Footer from '@/components/footer'
import Feature from '@/components/feature'
import Carousel from '@/components/carousel'

const inter = Inter({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400", "500"] });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" });

export default function Home() {

  const portraitSectionRef = useRef(null);

  const croppyCarouselWrapperRef = useRef(null);
  const gridChatCarouselWrapperRef = useRef(null);
  const lolAbilityQuizCarouselWrapperRef = useRef(null);

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

          <section className="w-full h-screen relative snap-center" id="home">
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
                      <h4 className={`uppercase tracking-tight dark:text-zinc-600 ${ibmPlexMono.className}`}>Hi, I'm Julian. I offer:</h4>
                      <div className="">
                        <h1 className="leading-tight [font-size:clamp(3rem,3.5vw,4.5rem)]"><span className="dark:bg-zinc-100 dark:text-zinc-900">Premium</span> <span className="dark:text-teal-400">full stack</span> services.</h1>
                        {/* <h1 className="leading-tight [font-size:clamp(2rem,3.5vw,4.5rem)]">Reliable, <span className={`${permanentMarker.className} text-emerald-400 dark:text-yellow-400`}>blazing fast </span> applications.</h1> */}
                        {/* <h1 className="leading-tight [font-size:clamp(2rem,3.5vw,4.5rem)]">Reliable, <span className={`${permanentMarker.className} text-emerald-400 dark:text-yellow-400`}>blazing fast </span> applications.</h1> */}
                        <h1 className="leading-tight [font-size:clamp(3rem,3.5vw,4.5rem)]">Reliable, blazing fast applications.</h1>
                        <h1 className="leading-tight [font-size:clamp(3rem,3.5vw,4.5rem)]">Stunning bespoke designs.</h1>
                      </div>
                      {/* <h1 className="leading-none text-center md:leading-tight md:text-left">Full stack development services. Clean, performant code. Stunning design.</h1> */}
                      <div className="flex py-8 gap-4 justify-center md:justify-start">
                        <ButtonLink href="/#projects">Work with me</ButtonLink>
                        {/* <ButtonLink href="#projects">Get in touch</ButtonLink> */}
                      </div>
                    </div>
                  </motion.div>

                </AnimatePresence>
              </div>
              <div></div>
            </div>
          </section>
          <section ref={portraitSectionRef} className="w-full flex flex-col items-center bg-black snap-start p-16" >

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-12 p-18">
              <motion.div className="relative w-[clamp(250px,300px,400px)] h-[clamp(250px,300px,400px)] rounded-full saturate-[.75] justify-self-center lg:justify-self-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <Portrait className="rounded-full "></Portrait>
              </motion.div>
              <div className="flex flex-col justify-center gap-2 max-w-3xl">
                <h1></h1>
                <h2>Hi! I'm Julian.</h2>
                <p>I have over six years of web development experience.</p>
                <p>I specialize in orchestrating <strong>top-notch</strong>, <strong>high-performance</strong> back-end systems combined with visually stunning, user-centric front-end interfaces.</p>
                <p>I pay meticulous attention to detail, ensuring that every pixel is in place. I deliver interfaces that not only look stunning but also function intuitively.</p>

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
          <section className="w-full py-36 flex flex-col items-center bg-black snap-start p-16">
            <h1 className="py-24 text-center">What I Do</h1>
            {/* <h1 className="py-24 bg-clip-text dark:text-transparent bg-gradient-to-tl from-slate-300 to-slate-50">What I Do</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 [&>*]:p-4 xl:p-18 xl:px-48">
              <Feature icon={BsLayersFill} title="Responsive Web Design">
                Mobile-first, responsive sites that perform well and look good on any device.
              </Feature>
              <Feature icon={FaRocket} title="Rock-Solid Backend">
                I combine six years of experience to build you a solid, fast, high-performance back-end service for your data.
              </Feature>
              {/* <Feature icon={IoPeople} title="Team Member">
                I'm personally dedicated to providing you world-class development services.
                Let's work together to build your dream app.
              </Feature> */}
              {/* <Feature icon={FaGears} title="Technical Expertise">
                I use cutting-edge tools and utilities. Proficient in running deployments on bare-metal, or cloud.
              </Feature> */}
              <Feature icon={BsLightningFill} title="Rapid Development">
                I proactively tackle problems and hurdle obstacles, inventing unique and creative solutions tailored to your needs.
              </Feature>
              <Feature icon={FaPalette} title="First-Class Design">
                I don't make exceptions when it comes to good design. I strive for an optimal user experience at all times.
              </Feature>
            </div>
          </section>
          <section className="w-full py-36 px-0 md:px-16 flex flex-col items-center bg-black snap-start" id="projects">
            <h1 className="py-24 text-center">My Work</h1>
            {/* <h1 className="py-24 bg-clip-text dark:text-transparent bg-gradient-to-tl from-slate-300 to-slate-50">What I Do</h1> */}

            <div className="flex flex-col gap-16 w-full md:w-auto">
              <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div ref={croppyCarouselWrapperRef} className="max-w-full md:max-w-[550px] h-[450px] relative border border-slate-400">
                  <Carousel wrapper={croppyCarouselWrapperRef} imagePaths={['/projects/croppy/1.png', '/projects/croppy/2.png']}></Carousel>
                </div>
                <div className="row-start-1 md:row-auto px-16 md:px-0 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="uppercase tracking-tighter  dark:text-zinc-700">Web Application</h4>
                    <h2>Croppy</h2>
                    <p className="dark:text-slate-400 mb-4">In-browser image cropping and compression tool</p>
                    <h4 className="dark:text-slate-300">Built with</h4>
                    <ul className="dark:text-slate-200">
                      <li>Vue.js</li>
                      <li>Sharp</li>
                      <li>Firebase Firestore</li>
                      <li>Vercel Serverless Functions</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <ButtonLink target="_blank" href="https://croppy.vercel.app/">Go to project</ButtonLink>
                </div>
              </article>

              <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div ref={gridChatCarouselWrapperRef} className="max-w-full md:max-w-[550px] h-[450px] relative border border-slate-400">
                  <Carousel wrapper={gridChatCarouselWrapperRef} imagePaths={['/projects/grid-chat/1.png', '/projects/grid-chat/2.png', '/projects/grid-chat/3.png']}></Carousel>
                </div>
                <div className="row-start-1 md:row-auto px-16 md:px-0 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="uppercase tracking-tighter dark:text-zinc-700">Web Application</h4>
                    <h2>Grid Chat</h2>
                    <p className="dark:text-slate-400 mb-4">Real-time communication on an infinite scrollable 2D grid</p>
                    <h4 className="dark:text-slate-300">Built with</h4>
                    <ul className="dark:text-slate-200">
                      <li>React.js</li>
                      <li>Firebase Realtime Database</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <ButtonLink target="_blank" href="https://grid-chat-app.web.app/">Go to project</ButtonLink>
                </div>
              </article>

              <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div ref={lolAbilityQuizCarouselWrapperRef} className="max-w-full md:max-w-[550px] h-[450px] relative border border-slate-400">
                  <Carousel wrapper={lolAbilityQuizCarouselWrapperRef} imagePaths={['/projects/lol-ability-quiz/1.png', '/projects/lol-ability-quiz/2.png', '/projects/lol-ability-quiz/3.png']}></Carousel>
                </div>
                <div className="row-start-1 md:row-auto px-16 md:px-0 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h4 className="uppercase tracking-tighter dark:text-zinc-700">Web Application</h4>
                    <h2>League of Legends Ability Quiz</h2>
                    <p className="dark:text-slate-400 mb-4">Interactive quiz on abilities from the online game League of Legends</p>
                    <h4 className="dark:text-slate-300">Built with</h4>
                    <ul className="dark:text-slate-200">
                      <li>Next.js</li>
                      <li>Cheerio</li>
                      <li>MongoDB</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <ButtonLink target="_blank" href="https://lol-ability-quiz.vercel.app/">Go to project</ButtonLink>
                </div>
              </article>

            </div>

          </section>


          <section className="w-full py-36 flex flex-col items-center bg-black snap-start p-16" id="resume">
            <h1 className="py-24 text-center">Resume</h1>
            {/* <h1 className="py-24 bg-clip-text dark:text-transparent bg-gradient-to-tl from-slate-300 to-slate-50">What I Do</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*]:p-4 xl:p-18 xl:px-48">
              <div className="flex flex-col max-w-[48rem] w-full">
                <h2 className="mb-6">Education</h2>
                <span className="text-2xl"><span className="text-2xl font-semibold">B.S. Computer Science</span> - University at Albany</span>
                <span className="uppercase dark:text-slate-400">Aug 2017 - May 2021</span>
                <p>Excelled in challenging computer science and mathematics coursework</p>
                <p>Achieved a 3.4 GPA while balancing a demanding course load and personal projects</p>
              </div>
              <div className="flex flex-col w-full">
                <h2 className="mb-6">Courses/Certifications</h2>
                <div className="w-full">
                  <ul className='space-y-2'>
                    <li className="hover:underline"><Link target="_blank" href="https://www.udemy.com/certificate/UC-0e59e413-7af0-4fd2-99be-df4df846e21c/">Learn and Understand NodeJS</Link></li>
                    <li className="">
                      <Link className="hover:underline" target="_blank" href="https://triplebyte.com/tb/julian-atkin-rio5onb/certificate">Triplebyte Certificate</Link>
                      <table className="w-full">
                        <tbody>
                          <tr className="border">
                            <td className="border p-2">
                              Front-end
                            </td>
                            <td className="border p-2">
                              Level 5
                            </td>
                          </tr>
                          <tr className="border">
                            <td className="border p-2">
                              Back-end
                            </td>
                            <td className="border p-2">
                              Level 4
                            </td>
                          </tr>
                          <tr className="border">
                            <td className="border p-2">
                              General Coding Logic
                            </td>
                            <td className="border p-2">
                              Level 4
                            </td>
                          </tr>
                          <tr className="border">
                            <td className="border p-2">
                              React
                            </td>
                            <td className="border p-2">
                              Level 4
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="flex flex-col w-full">
                <h2 className="mb-6">Skills</h2>
                <div className="w-full">
                  <div className="flex justify-between">
                    <ul className='grow space-y-2'>
                      <li>React.js</li>
                      <li>Vue.js</li>
                      <li>Vanilla JS</li>
                      <li>Node.js</li>
                      <li>CSS</li>
                    </ul>
                    <ul className='grow space-y-2'>
                      <li>MongoDB</li>
                      <li>SQL</li>
                      <li>AWS</li>
                      <li>Firebase</li>
                      <li>Linux</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <Feature icon={BsLayersFill} title="Responsive Web Design">
                Mobile-first, responsive sites that perform well and look good on any device.
              </Feature>
              <Feature icon={FaRocket} title="Rock-Solid Backend">
                I combine six years of experience to build you a solid, fast, high-performance back-end service for your data.
              </Feature>
              <Feature icon={IoPeople} title="Team Member">
                I'm personally dedicated to providing you world-class development services.
                Let's work together to build your dream app.
              </Feature>
              <Feature icon={FaGears} title="Technical Expertise">
                I use cutting-edge tools and utilities. Proficient in running deployments on bare-metal, or cloud.
              </Feature>
              <Feature icon={BsLightningFill} title="Rapid Development">
                I proactively tackle problems and hurdle obstacles, inventing unique and creative solutions tailored to your needs.
              </Feature>
              <Feature icon={FaPalette} title="First-Class Design">
                I don't make exceptions when it comes to good design. I strive for an optimal user experience at all times.
              </Feature> */}
            </div>
          </section>

          <section className="w-full flex flex-col items-center relative bg-black snap-start p-16" id="projects">
            {/* <div className='w-full h-full top-0 absolute bg-gradient-to-b from-black z-[-1]'></div> */}
            <h3 className="py-16 text-center">📑Currently seeking full-time work in <u>full stack development</u> or <u>front-end development</u>!📑</h3>
            <span className="text-5xl animate-bounce">👇</span>
            <div className="pt-16 border-dotted flex flex-col items-center">
              <span className="flex items-center gap-4">
                <h4>Connect with me</h4>
              </span>
              <SocialButtons></SocialButtons>
              <div className="flex flex-col text-left">
                <span>
                  Email:  jatkindev@gmail.com
                </span>
                <span>
                  Cell:   (917)-626-7874
                </span>
              </div>
            </div>
          </section>
          <Footer></Footer>
        </div >
      </Animated >
    </>
  )
}
