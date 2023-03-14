import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import SocialButtons from '@/components/SocialButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUpRightFromSquare, faFaceSmile, faFile, faPenRuler, faPerson } from '@fortawesome/free-solid-svg-icons'
import Animated from '@/components/Animated'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
        <header className="flex flex-col w-full justify-around items-center py-4">
          <div className="flex flex-col md:w-3/4 items-center md:text-center mx-auto p-6 py-8">
            <div>
              <h1 className={`bg-gradient-to-r text-transparent bg-clip-text from-sky-800 to-blue-600 tracking-tight desktop-xl:text-8xl`}>Julian Atkin</h1>
              <h2 className="mb-4 text-zinc-800">Full Stack Engineer</h2>
            </div>
            <p className="my-12 animate-fade-in text-zinc-800 text-lg">Hi, I&apos;m Julian! <strong>My mission</strong> is to build accessible and usable <strong>web technologies</strong> that make the world a <strong>better place</strong>.</p>
            <div className="mb-16 flex flex-col items-center">
              {/* <p className="text-zinc-800">Get in touch <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon> </p> */}
              <SocialButtons></SocialButtons>
            </div>
          </div>
          {/* <div className="relative object-cover min-w-[16rem] border-l hidden md:block">
            <Portrait></Portrait>
          </div> */}
        </header>
        <section className="border-t border-b">
          <div className="w-full min-h-[300px] grid grid-cols-1 lg:grid-cols-3 [&>*]:bg-white gap-px bg-zinc-200">
            <div className="relative flex flex-col items-center">
              <Link className="block w-full h-full hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm" href="/projects">
                <div className="flex flex-col items-center justify-around h-full p-4 py-6">
                  <div className="flex flex-col items-center space-y-3">
                  <h3 className="font-normal">Projects</h3>
                  <FontAwesomeIcon className="text-3xl text-zinc-700" icon={faPenRuler}></FontAwesomeIcon>
                  </div>
                </div>
              </Link>
              {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute right-4 bottom-4 text-5xl text-zinc-200"></FontAwesomeIcon> */}
            </div>
            <div className="relative flex flex-col items-center">
              <Link className="block w-full h-full hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm" href="/resume">
                <div className="flex flex-col items-center justify-around h-full p-4 py-6">
                  <div className="flex flex-col items-center space-y-3">
                  <h3 className="font-normal">Resume</h3>
                  <FontAwesomeIcon className="text-3xl text-zinc-700" icon={faFile}></FontAwesomeIcon>
                  </div>
                </div>
              </Link>
              {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute right-4 bottom-4 text-5xl text-zinc-200"></FontAwesomeIcon> */}
            </div>
            <div className="relative flex flex-col items-center">
              <Link className="block w-full h-full hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm" href="/about">
                <div className="flex flex-col items-center justify-around h-full p-4 py-6">
                  <div className="flex flex-col items-center space-y-3">
                  <h3 className="font-normal">About Me</h3>
                  <FontAwesomeIcon className="text-3xl text-zinc-700" icon={faFaceSmile}></FontAwesomeIcon>
                  </div>
                </div>
              </Link>
              {/* <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute right-4 bottom-4 text-5xl text-zinc-200"></FontAwesomeIcon> */}
            </div>
          </div>
        </section>
      </Animated>
    </>
  )
}
