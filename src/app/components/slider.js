'use client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.sass';

const handleDragStart = (e) => e.preventDefault();

const Slider = ({items}) => {
  const sliderItems = items.map(item => {
    item.props.onDragStart = handleDragStart;
    return item;
  });

  return (
    <div className='slider'>
      <AliceCarousel keyboardNavigation={true} mouseTracking items={items} />
    </div>
  );
};

export default Slider;