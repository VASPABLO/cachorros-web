import React, { useEffect, useState, useRef } from 'react'; 
import './Banners.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banners() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        cargarBanners();
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current?.update();
        }
    }, [images]);

    // Función para cargar las imágenes locales
    const cargarBanners = () => {
        // Aquí puedes poner las rutas relativas de las imágenes locales
        const localImages = [
            '/img/Banner2.png',  // Ruta local
            '/img/Banner3.png',  // Ruta local
            // Más imágenes locales...
        ];

        setImages(localImages);  // Asignar las imágenes locales al estado
        setLoading(false);  // Establecer que la carga ha terminado
    };

    return (
        <div className='BannerContain'>

            {loading ? (
                <div className='loadingBanner'>
                    {/* Aquí podrías poner un loader si lo deseas */}
                </div>
            ) : (
                <Swiper
                    grabCursor={true}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    id='swiper_container'
                >
                    {images.map((image, index) => (
                        <SwiperSlide id='SwiperSlide-scroll' key={index}>
                            <img src={image} alt={`imagen-${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
