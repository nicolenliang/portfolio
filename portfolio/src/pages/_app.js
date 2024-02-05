import '@/styles/globals.css';
import Layout from '../components/Layout';
import { Baskervville } from 'next/font/google';

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
    </main>
  );
}
