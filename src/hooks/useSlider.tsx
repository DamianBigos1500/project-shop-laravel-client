import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imagesSliderType } from '@/components/HomePageCarousel';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function useSlider(images: imagesSliderType[]) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = (page + images.length) % images.length;

  // function that requires 1 or -1 to right or left change image
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const changeOnDrag = (_e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);
    console.log(swipeConfidenceThreshold);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const ImageComponent = () => (
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={page}
        src={images[imageIndex].imageSrc}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={changeOnDrag}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </AnimatePresence>
  );

  return [paginate, ImageComponent];
}
