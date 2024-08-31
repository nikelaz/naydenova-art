'use client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.sass';

const handleDragStart = (e) => e.preventDefault();

const Slider = ({items, className}) => {
  const sliderItems = items.map(item => {
    item.props.onDragStart = handleDragStart;
    return item;
  });

  return (
    <div className={`slider${className ? ` ${className}` : ''}`}>
      <AliceCarousel keyboardNavigation={true} mouseTracking items={sliderItems} itemsFit="contain" autoWidth={true} autoHeight={true}/>
    </div>
  );
};

export default Slider;