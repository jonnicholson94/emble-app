import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <main className={inter.className}>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
    </>
  )
}
