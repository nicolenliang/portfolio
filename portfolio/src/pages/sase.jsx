import ProjectHeader from '@/components/ProjectHeader';
import More from '@/components/More';
import ImageCard from '@/components/ImageCard';
import { projectData } from '@/components/component_data/projectData';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useRouter } from 'next/router';
import path from 'path';
import {promises as fs} from 'fs';

const Sase = ( {saseFiles} ) => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];
    
    const columnsCountBreakPoints = {350:1, 750:2, 900:3}
    
    const saseFlyers = saseFiles.filter(file => file.type == "flyer");
    const saseMerch = saseFiles.filter(file => file.type == "merch");
    
    return (
        <div>
            <ProjectHeader project={project} />
            <div className="proj-imgs-container">
                <div className="proj-subsec-text">
                    <h2>General Flyers</h2>
                    <hr />
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {saseFlyers.map((file) => (
                            <ImageCard
                                filename={file.file}
                                caption={file.caption}
                            />
                        ))}
                    </Masonry>    
                </ResponsiveMasonry>
            </div>
            <div className="proj-imgs-container">
                <div className="proj-subsec-text">
                    <h2>Merchandise</h2>
                    <hr />
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {saseMerch.map((file) => (
                            <ImageCard
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
    const dir = path.join(process.cwd(), '/src/components/project_files/saseFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const saseFiles = JSON.parse(file);

    return { props: { saseFiles : await Promise.all(saseFiles) }}
}

export default Sase;