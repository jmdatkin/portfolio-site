import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AnimatePresence } from 'framer-motion';
import { createContext, useState } from 'react';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {



  return (
    <>
      <NextNProgress></NextNProgress>
      <AnimatePresence mode="wait" initial={false}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}
