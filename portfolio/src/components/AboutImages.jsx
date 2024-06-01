import Image from 'next/image';

const AboutImages = () => {
    return (
        <div className="about-images">
            <Image className="right-img"
                src="/about-2.png"
                width={365}
                height={365}
                alt="Nicole in Japan, 2023" />
            <Image className="left-img"
                src="/about-1.png"
                width={365}
                height={365}
                alt="Nicole in New York, 2021" />
        </div>
    )
}

export default AboutImages;