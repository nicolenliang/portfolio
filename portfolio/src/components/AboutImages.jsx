import Image from 'next/image';

const AboutImages = () => {
    return (
        <div className="about-images">
            <Image className="right-img"
                src="/about-1.png"
                width={365}
                height={365}
                alt="Nicole in New York, 2021" />
            <Image className="left-img"
                src="/about-3.jpg"
                width={365}
                height={365}
                alt="Nicole with a Chantenay Carrot, 2024" />
        </div>
    )
}

export default AboutImages;