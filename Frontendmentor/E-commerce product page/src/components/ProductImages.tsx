import { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';

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
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = () => {
        setActiveImage(
            (prev) => (prev + 1) % productImages.length
        );
    };

    const prevImage = () => {
        setActiveImage(
            (prev) =>
                prev === 0
                    ? productImages.length - 1
                    : prev - 1
        );
    };

    return (
        <>
            <div className="">
                {/* MOBILE */}
                <div className="relative md:hidden">
                    <img
                        src={productImages[activeImage]}
                        alt={`Product ${activeImage + 1}`}
                        className="w-full object-cover"
                    />

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
                        aria-label="Previous image"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
                        aria-label="Next image"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block md:p-8">
                    <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="overflow-hidden rounded-2xl"
                    >
                        <img
                            src={productImages[activeImage]}
                            alt={`Product ${activeImage + 1}`}
                            className="w-full rounded-2xl cursor-pointer transition-opacity hover:opacity-75"
                        />
                    </button>

                    <div className="mt-8 flex justify-between gap-4">
                        {thumbnails.map((thumbnail, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    setActiveImage(index)
                                }
                                className={`
                                    overflow-hidden rounded-xl border-2
                                    ${
                                        activeImage === index
                                            ? 'border-orange-500'
                                            : 'border-transparent'
                                    }
                                `}
                            >
                                <img
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={` cursor-pointer
                                        w-20 rounded-xl transition-opacity
                                        hover:opacity-70
                                        ${
                                            activeImage === index
                                                ? 'opacity-40'
                                                : ''
                                        }
                                    `}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* LIGHTBOX DESKTOP */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/75 md:flex">
                    <div className="relative w-full max-w-xl">
                        {/* Close */}
                        <button
                            onClick={() =>
                                setIsLightboxOpen(false)
                            }
                            className="absolute cursor-pointer -top-12 right-0 text-white transition-colors hover:text-orange-500"
                            aria-label="Close lightbox"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative">
                            <img
                                src={productImages[activeImage]}
                                alt={`Product ${activeImage + 1}`}
                                className="w-full rounded-2xl"
                            />

                            <button
                                onClick={prevImage}
                                className="absolute cursor-pointer left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
                                aria-label="Previous image"
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute cursor-pointer right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
                                aria-label="Next image"
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="mx-auto mt-8 flex w-[80%] justify-center gap-4">
                            {thumbnails.map(
                                (thumbnail, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setActiveImage(index)
                                        }
                                        className={`
                                            overflow-hidden cursor-pointer rounded-xl border-2 bg-white
                                            ${
                                                activeImage ===
                                                index
                                                    ? 'border-orange-500'
                                                    : 'border-transparent'
                                            }
                                        `}
                                    >
                                        <img
                                            src={thumbnail}
                                            alt={`Thumbnail ${
                                                index + 1
                                            }`}
                                            className={`
                                                w-20 transition-opacity
                                                ${
                                                    activeImage ===
                                                    index
                                                        ? 'opacity-40'
                                                        : 'hover:opacity-75'
                                                }
                                            `}
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductImages;