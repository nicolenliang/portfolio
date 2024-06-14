import ProjectHeader from '@/components/ProjectHeader';
import More from '@/components/More';
import ImageCard from '@/components/ImageCard';
import { projectData } from '@/components/component_data/projectData';

import { useRouter } from 'next/router';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { promises as fs } from 'fs';
import path from 'path';

const Aasu = ( {aasuFiles} ) => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    const columnsCountBreakPoints = {350:1, 750:2, 900:3}

    const aasuGbm = aasuFiles.filter(file => file.type == "gbm");
    const aasuMerch = aasuFiles.filter(file => file.type == "merch");
    const aasuMisc = aasuFiles.filter(file => file.type == "misc");

    return (
        <div>
            <ProjectHeader project={project} />
            <div className="proj-imgs-container">
                <div className="proj-subsec-text">
                    <h2>General Body Meetings</h2>
                    <hr />
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {aasuGbm.map((file) => (
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
                        {aasuMerch.map((file) => (
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
                    <h2>Miscellaneous Fliers</h2>
                    <hr />
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {aasuMisc.map((file) => (
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
    const dir = path.join(process.cwd(), '/src/components/project_files/aasuFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const aasuFiles = JSON.parse(file);

    return { props: { aasuFiles : await Promise.all(aasuFiles) }}
}

export default Aasu;