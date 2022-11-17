import { useEffect, useState } from 'react';
import { Layout } from '../components/'
import { SessionProvider } from 'next-auth/react'

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, session }: AppProps) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
