import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import More from '@/components/More';
import Contact from '@/components/Contact';
import { workData } from '@/components/component_data/projectData';

import Head from 'next/head';

export default function Home() {
  const featured = workData.filter(project => project.feature == true);

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
        <Projects data={featured} />
        <More />
        <Contact />
      </div>
    </>
  );
};
