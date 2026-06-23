import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importe as imagens diretamente para que o Vite as processe
import imageProduct1 from '../assets/images/image-product-1.jpg';
import imageProduct2 from '../assets/images/image-product-2.jpg';
import imageProduct3 from '../assets/images/image-product-3.jpg';
import imageProduct4 from '../assets/images/image-product-4.jpg';

import imageThumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

const productImages = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
];

const thumbnails = [
    imageThumbnail1,
    imageThumbnail2,
    imageThumbnail3,
    imageThumbnail4,
];

function ProductImages() {
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % productImages.length);
    };

    const prevImage = () => {
        setActiveImage((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };

    return (
        <div className="md:w-1/2 lg:w-2/5">
            {/* Imagem principal para mobile */}
            <div className="relative md:hidden">
                <img
                    src={productImages[activeImage]}
                    alt="Product large view"
                    className="w-full object-cover"
                />
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            {/* Imagens para desktop */}
            <div className="hidden md:block md:p-8">
                <img
                    src={productImages[activeImage]}
                    alt="Product large view"
                    className="w-full rounded-xl"
                />
                <div className="flex justify-between mt-4 space-x-4">
                    {thumbnails.map((thumbnail, index) => (
                        <img
                            key={index}
                            src={thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            className={`w-20 h-20 rounded-xl cursor-pointer hover:opacity-75 ${activeImage === index ? 'border-2 border-orange-500 opacity-50' : ''}
                            `}
                            onClick={() => setActiveImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductImages