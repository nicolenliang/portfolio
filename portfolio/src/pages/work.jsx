import Link from 'next/link';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import { workData } from '@/components/component_data/workData';

const Work = () => {
    return (
        <div className="work-container">
            <div className="work-header">
                <h1>Projects</h1>
                <hr />
                <div className="work-meta">
                    <p>personal, professional, and academic projects over time</p>
                    <div className="work-filters">
                        <p>type &mdash; </p>
                        <Link href="#design">design</Link>
                        <Link href="#code">code</Link>
                    </div>
                </div>
            </div>
            <Projects data={workData} />
            <Contact />
        </div>
    )
}

export default Work;