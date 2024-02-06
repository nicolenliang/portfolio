import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import { codeData } from '@/components/component_data/codeData';

const Code = () => {
    return (
        <div className="code-container">
            <div className="code-header">

            </div>
            <Projects data={codeData} />
            <Contact />
        </div>
    )
}

export default Code;