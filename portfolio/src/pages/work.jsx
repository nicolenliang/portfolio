import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import { projectData } from '@/components/component_data/projectData';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Work = () => {
    const router = useRouter();
    var type = router.query.type;
    if (type) {
        var prefiltered = projectData.filter(project => project.type == type);
    }
    else {
        prefiltered = projectData;
    }

    const [data, setData] = useState(prefiltered);
    
    const filterData = (event) => {
        const type = event.target.value;
        if (type == "all") {
            setData(projectData);
        }
        else {
            const filtered = projectData.filter(project => project.type == type);
            setData(filtered);
        }
    }

    return (
        <div className="work-container">
            <Head>
                <title>projects &bull; Nicole Liang</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <div className="work-header">
                <h1>Projects</h1>
                <hr />
                <div className="work-desc">
                    <p>personal, professional, and academic projects over time</p>
                    <div className="work-filters">
                        <p>type &mdash; </p>
                        <button value="design" onClick={filterData}>design</button>
                        <button value="code" onClick={filterData}>code</button>
                        <button value="all" onClick={filterData}>all</button>
                    </div>
                </div>
            </div>
            <Projects data={data} />
            <Contact />
        </div>
    )
}

export default Work;