import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { designData } from '@/components/component_data/designData';

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
        <Projects data={designData} />
        <Contact />
      </div>
    </>
  );
};
