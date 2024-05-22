import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import { workData } from '@/components/component_data/projectData';

import { useState } from 'react';

const Work = () => {
    const allData = workData;
    const [data, setData] = useState(workData);

    const filterData = (event) => {
        const type = event.target.value;
        if (type == "all") {
            setData(allData);
        }
        else {
            const filtered = workData.filter(project => project.type == type);
            setData(filtered);
        }
    }

    return (
        <div className="work-container">
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