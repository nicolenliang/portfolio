import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';

const TwitterClone = () => {
    const router = useRouter();
    var project = router.query;

    return (
        <div>
            <ProjectHeader project={project} />
        </div>
    )
}

export default TwitterClone;