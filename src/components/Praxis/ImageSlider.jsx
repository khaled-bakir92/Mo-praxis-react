import React, { useEffect, useRef } from 'react';
import './Praxis.css';

const ImageSlider = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const imageWidth = imageList.querySelector('.image-item').clientWidth + 220; // 18px is the gap between images

    const handleMouseDown = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = scrollbarThumb.parentNode.clientWidth - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        
        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleButtonClick = (direction) => {
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleSlideButtons = () => {
      prevButton.style.display = imageList.scrollLeft <= 0 ? 'none' : 'flex';
      nextButton.style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
    };

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (scrollbarThumb.parentNode.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    scrollbarThumb.addEventListener('mousedown', handleMouseDown);
    prevButton.addEventListener('click', () => handleButtonClick(-1));
    nextButton.addEventListener('click', () => handleButtonClick(1));
    imageList.addEventListener('scroll', () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    const autoSlide = setInterval(() => {
      if (imageList.scrollLeft >= maxScrollLeft) {
        imageList.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        imageList.scrollBy({ left: imageWidth, behavior: 'smooth' });
      }
    }, 5000);

    window.addEventListener('resize', () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    });

    handleSlideButtons();
    updateScrollThumbPosition();
    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className="slider-wrapper">
        <button id="prev-slide" className="slide-button material-symbols-rounded" ref={prevButtonRef}>
          {/* chevron_left */}
        </button>
        <ul className="image-list" ref={imageListRef}>
          <img className="image-item" src="../../../images/praxis/Praxisteam.png" alt="img-10" />
          <img className="image-item" src="../../../images/praxis/1.png" alt="img-1" />
          <img className="image-item" src="../../../images/praxis/2.png" alt="img-2" />
          <img className="image-item" src="../../../images/praxis/3.png" alt="img-3" />
          <img className="image-item" src="../../../images/praxis/4.png" alt="img-4" />
          <img className="image-item" src="../../../images/praxis/5.png" alt="img-5" />
          <img className="image-item" src="../../../images/praxis/6.png" alt="img-6" />
          <img className="image-item" src="../../../images/praxis/7.png" alt="img-7" />
          <img className="image-item" src="../../../images/praxis/9.png" alt="img-9" />
          <img className="image-item" src="../../../images/praxis/8.png" alt="img-8" />

          
        </ul>
        <button id="next-slide" className="slide-button material-symbols-rounded" ref={nextButtonRef}>
          {/* chevron_right */}
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
