import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';

const UIUX = () => {
    const router = useRouter();
    var project = router.query;

    return (
        <div>
            <ProjectHeader project={project} />
        </div>
    )
}

export default UIUX;