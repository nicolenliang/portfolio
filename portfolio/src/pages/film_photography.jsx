import ProjectHeader from '@/components/ProjectHeader';
import ImageCard from '@/components/ImageCard';
import More from '@/components/More';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { promises as fs } from 'fs';
import path from 'path';

const FilmPhotography = ( {filmFiles} ) => {
    const router = useRouter();
    var project = router.query;

    const columnsCountBreakPoints = {350:1, 750:2, 900:3}

    const [enlarged, setEnlarged] = useState(false);
    
    // need to add centering of image and blurring background
    const onCardClick = (event) => {
        const filename = event.target.id;
        const image = document.getElementById(filename);

        if (enlarged) {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.25s ease';
        }
        else {
            image.style.transform = 'scale(1.25)';
            image.style.transition = 'transform 0.25s ease';
        }
        setEnlarged(!enlarged);
    };

    return (
        <div>
            <ProjectHeader project={project} />
            <div className="proj-imgs-container" id="proj-imgs-container">
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={'5rem'}>
                        {filmFiles.map((file) => (
                            <ImageCard className="disable-blur"
                                filename={file.file}
                                caption={file.caption}
                                onCardClick={onCardClick}
                            />
                        ))}
                    </Masonry>    
                </ResponsiveMasonry>
            </div>
            <More />
        </div>
    )
};

// figure out how to grab images directly from /public/film folder
export async function getStaticProps() {
    const dir = path.join(process.cwd(), '/src/components/project_files/filmFiles.json');
    const file = await fs.readFile(dir, 'utf8');
    const filmFiles = JSON.parse(file);

    return { props: { filmFiles: await Promise.all(filmFiles) }}
}

export default FilmPhotography;