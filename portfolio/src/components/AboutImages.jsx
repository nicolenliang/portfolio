import Image from 'next/image';
import ny from '../../public/ny-img.png';
import jp from '../../public/jp-img.png';

const AboutImages = () => {
    return (
        <div className="about-images">
            <Image className="jp-img"
                src={jp}
                width={365}
                height={365}
                alt="Nicole in Japan, 2023" />
            <Image className="ny-img"
                src={ny}
                width={365}
                height={365}
                alt="Nicole in New York, 2021" />
        </div>
    )
}

export default AboutImages;