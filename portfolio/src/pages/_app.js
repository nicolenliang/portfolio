import '@/styles/globals.css';
import Layout from '../components/Layout';
import { Baskervville } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={baskervville.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </main>
  );
}
