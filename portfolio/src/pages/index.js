import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import More from '@/components/More';
import Contact from '@/components/Contact';
import { projectData } from '@/components/component_data/projectData';

import Head from 'next/head';

export default function Home() {
  const featured = projectData.filter(project => project.feature == true);

  return (
    <>
      <Head>
        <title>Nicole Liang</title>
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
