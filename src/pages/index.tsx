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
import BackgroundVisualization from '@/components/background-visualization'
import ButtonLink from '@/components/button-link'

const inter = Inter({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400", "500"] });
const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: "400" });

export default function Home() {
  return (
    <>
      <Animated>
        <Head>
          <title>Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <BackgroundVisualization></BackgroundVisualization>
        <div className="w-full h-full z-[100] snap-y">
          <section className="w-full h-full relative snap-start">
            <div className='w-full h-full absolute bg-gradient-to-t from-black z-[-1]'></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full p-24'>
              {/* <div className='flex w-full h-full z-[100] relative'> */}
              <div className="flex flex-col justify-center items-center">
                <div className="leading-loose flex flex-col gap-4">
                  <h4 className={`uppercase tracking-tight dark:text-zinc-500 ${ibmPlexMono.className}`}>Hi, I'm Julian. I write apps with</h4>
                  {/* <h1 className="leading-tight"><span className={`${permanentMarker.className} text-fuchsia-400 dark:text-fuchsia-400`}>Clean, </span> <span className={`${permanentMarker.className} text-emerald-400 dark:text-teal-400`}>performant </span> code. Beautiful design.</h1> */}
                  <h1 className="leading-none text-center md:leading-tight md:text-left">Clean, performant code. Stunning design.</h1>
                  <ButtonLink href="/about">Work with me</ButtonLink>
                  <ButtonLink href="#projects">Get in touch</ButtonLink>
                </div>
                {/* <h1 className={`tracking-tight  text-zinc-800 dark:text-zinc-100 whitespace-nowrap`}>Julian Atkin</h1> */}
                {/* <h2 className="mb-4 text-zinc-800 dark:text-zinc-100">Full Stack Engineer</h2>
              <p>
                Rock-solid code meets beautiful design.
              </p> */}
              </div>
              <div></div>
            </div>
          </section>
          <section className="w-full h-full flex flex-col items-center bg-black snap-start p-16" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-1/2 h-full p-18">
              <div className="relative w-[400px] h-[600px] saturate-[.75]">
                <Portrait ></Portrait>

              </div>
              <div className="flex flex-col">
                <SocialButtons></SocialButtons>
              </div>
            </div>
          </section>
        </div>

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

      </Animated>
    </>
  )
}
