import ProjectHeader from '@/components/ProjectHeader';
import ProjectDetails from '@/components/ProjectDetails';
import More from '@/components/More';
import ImageCard from '@/components/ImageCard';
import { projectData } from '@/components/component_data/projectData';

import { useRouter } from 'next/router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { promises as fs } from 'fs';
import path from 'path';

const KumoKumo = ( {kkFiles} ) => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    const columnsCountBreakPoints = {350:1, 750:2, 900:2}
    
    return (
        <div>
            <ProjectHeader project={project} />
            <ProjectDetails project={project} />
            <div className="proj-imgs-container" id="proj-imgs-container">
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {kkFiles.map((file) => (
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
}

export async function getStaticProps() {
    const dir = path.join(process.cwd(), '/src/components/project_files/kkFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const kkFiles = JSON.parse(file);

    return { props: { kkFiles : await Promise.all(kkFiles) }}
}

export default KumoKumo;