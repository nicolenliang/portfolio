import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';
import { projectData } from '@/components/component_data/projectData';

const InstaClone = () => {
    const router = useRouter();
    const pathname = router.pathname;

    var project = projectData.filter(project => project.shortcut == pathname);
    project = project[0];

    return (
        <div>
            <ProjectHeader project={project} />
        </div>
    )
}

export default InstaClone;