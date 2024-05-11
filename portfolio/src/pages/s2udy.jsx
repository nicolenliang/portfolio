import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';

const S2udy = () => {
    const router = useRouter();
    var project = router.query;

    return (
        <div>
            <ProjectHeader project={project} />
        </div>
    )
}

export default S2udy;