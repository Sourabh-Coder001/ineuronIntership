import React, { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  const bannerImages = [
    'https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',

    'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg',

    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji27hydpaCs4kFdF-dwgLa6ZZIrn4zNL9fnOUCvzUKM14I8irBahfO5xzmRHCB1g_iCrBm1gByYyvkIhC2Fs_zDi45TkmdIkC2YnNeQP7OYfk18HTUGGgGYRDp3G0ERZccg7TFSUE-s-I1xq4cpUxUoZR4oPvvq-4O11ASq_ljLbk52J5iK957NGBR/s1280/fashion%20banner%20design.webp',

    'https://i.ytimg.com/vi/U5Q3Du2W9a0/maxresdefault.jpg',

    'https://img.freepik.com/premium-psd/black-friday-sale-social-media-post-instagram-post-web-banner-facebook-cover-template_220443-1071.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            style={{ width: '100%', height: '300px', flexShrink: 0 }}
          />
        ))}
        {bannerImages.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`Banner ${index + 1}`}
            style={{ width: '100%', height: '300px', flexShrink: 0, padding: '20px'}}
          />
        ))}
      </div>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={prevSlide}
      >
        <ArrowBackIcon fontSize="large" />
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={nextSlide}
      >
        <ArrowForwardIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Banner;
