import Hero from '@/components/Hero';
import Designs from '@/components/Designs';
import Contact from '@/components/Contact';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicole's Portfolio</title>
        <meta name="description" content="nicole's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Hero />
        <Contact />
        <p>TEST</p>
      </div>
    </>
  );
};
