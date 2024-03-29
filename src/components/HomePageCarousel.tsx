import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { createImageUrl } from '@/utils/createImgUrl';
import Link from 'next/link';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';

export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

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

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function HomePageCarousel({ advertiseCarousel }: any) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex =
    (page + advertiseCarousel.length) % advertiseCarousel.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  if (advertiseCarousel.length === 0) return <div></div>;

  return (
    <div className="mt-8 flex lg:flex-row flex-col-reverse ">
      <div className="relative h-[20rem] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={createImageUrl(advertiseCarousel[imageIndex].images.filename)}
            onClick={() =>
              navigateToProductDetails(advertiseCarousel[imageIndex].product_id)
            }
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
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 object-cover w-full h-full cursor-pointer"
          ></motion.img>
        </AnimatePresence>
        <div
          className="absolute z-10 top-[50%] translate-y-[-50%] right-2 rounded-full bg-white/70 p-4 cursor-pointer"
          onClick={() => paginate(1)}
        >
          <AiFillCaretRight />
        </div>
        <div
          className="absolute z-10 top-[50%] translate-y-[-50%] left-2 rounded-full bg-white/70 p-4 cursor-pointer"
          onClick={() => paginate(-1)}
        >
          <AiFillCaretLeft />
        </div>
      </div>
    </div>
  );
}
