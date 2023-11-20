import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Project from '@/components/Project'
import Portrait from '@/components/Portrait'
import Animated from '@/components/Animated'
import Carousel from '@/components/Carousel'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ProjectLaunchButton from '@/components/ProjectLaunchButton'
import Experiment from '@/components/Experiment'

const inter = Inter({ subsets: ['latin'] })

export default function GridChat() {

  const carouselWrapperRef = useRef(null);

  return (
    <>
      <Animated>
        <Head>
          <title>Experiments | Julian Atkin</title>
          <meta name="description" content="Full Stack Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="p-6 py-8 mb-6">
          <h1 className={`tracking-tight`}>Experiments</h1>
        </header>
        <section className="border-t border-b">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [&>*]:bg-white gap-px bg-zinc-200">
            <Experiment title="Design Agency" slug="design-agency">
            </Experiment>
            <Experiment title="Early 2000s" slug="early-2000s">
            </Experiment>
            <div className="h-full !bg-zinc-200 flex flex-col items-center justify-around text-center">
              <span className="text-zinc-400">
                More amazing projects on the way!
              </span>
            </div>
          </div>
        </section>

      </Animated>
    </>
  )
}
