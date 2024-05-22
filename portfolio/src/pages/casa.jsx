import ProjectHeader from '@/components/ProjectHeader';
import More from '@/components/More';
import ImageCard from '@/components/ImageCard';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useRouter } from 'next/router';
import path from 'path';
import {promises as fs} from 'fs';

const Casa = ( {casaFiles} ) => {
    const router = useRouter();
    var project = router.query;
    
    const columnsCountBreakPoints = {350:1, 750:2, 900:3}
    
    const casaFlyers = casaFiles.filter(file => file.type == "flyer");
    const casaMerch = casaFiles.filter(file => file.type == "merch");
    const casaMisc = casaFiles.filter(file => file.type == "misc");
    
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
                        {casaFlyers.map((file) => (
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
                        {casaMerch.map((file) => (
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
                    <h2>Miscellaneous Designs</h2>
                    <hr />
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {casaMisc.map((file) => (
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
    const dir = path.join(process.cwd(), '/src/components/project_files/casaFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const casaFiles = JSON.parse(file);

    return { props: { casaFiles : await Promise.all(casaFiles) }}
}

export default Casa;