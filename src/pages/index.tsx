import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/project'
import Portrait from '@/components/portrait'
import SocialButtons from '@/components/social-buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUpRightFromSquare, faFaceSmile, faFile, faPenRuler, faPerson } from '@fortawesome/free-solid-svg-icons'
import Animated from '@/components/animated'
import Link from 'next/link'
import BackgroundVisualization from '@/components/background-visualization'

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
        <BackgroundVisualization></BackgroundVisualization>
        <header className="relative z-[100] flex flex-col w-full justify-around items-center py-4">
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
        </header>

      </Animated>
    </>
  )
}
