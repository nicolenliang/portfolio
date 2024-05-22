import Image from 'next/image';

const ImageCard = ( {filename, caption, onCardClick} ) => {
    
    return (
        <div className="image-card">
            <button onClick={onCardClick}>
                <Image className="image-card-image" id={filename}
                    src={filename}
                    width={600}
                    height={600}
                    alt={caption}
                />
            </button>
            <p>{caption}</p>
        </div>
    )
};

export default ImageCard;