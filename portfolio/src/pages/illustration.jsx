import ProjectHeader from '@/components/ProjectHeader';
import More from '@/components/More';
import ImageCard from '@/components/ImageCard';
import { projectData } from '@/components/component_data/projectData';

import { useRouter } from 'next/router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { promises as fs } from 'fs';
import path from 'path';

const Illustration = ( {illusFiles} ) => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    const columnsCountBreakPoints = {350:1, 750:2, 900:3}

    return (
        <div>
            <ProjectHeader project={project} />
            <div className="proj-imgs-container" id="proj-imgs-container">
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {illusFiles.map((file) => (
                            <ImageCard className="disable-blur"
                                filename={file.file}
                                caption={file.caption}
                            />
                        ))}
                    </Masonry>    
                </ResponsiveMasonry>
            </div>
            <More />
        </div>
    )
};

export async function getStaticProps() {
    const dir = path.join(process.cwd(), '/src/components/project_files/illusFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const illusFiles = JSON.parse(file);

    return { props: { illusFiles : await Promise.all(illusFiles) }}
}

export default Illustration;