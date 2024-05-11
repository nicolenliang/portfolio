import { useRouter } from 'next/router';
import ProjectHeader from '@/components/ProjectHeader';

const Aasu = () => {
    const router = useRouter();
    var project = router.query;

    return (
        <div>
            <ProjectHeader project={project} />
            <div className="aasu-gbm">

            </div>
            <div className="aasu-fliers">

            </div>
            <div className="aasu-merch">
                
            </div>
        </div>
    )
}

export default Aasu;