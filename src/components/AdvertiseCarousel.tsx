import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Router from 'next/router';

const advertiseSlider = [
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/oppo/find_2/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/lp/2023/metody_na_kody_zimowe_luty/125895_Nocne_kody_rabatowe_1_02_karuzeladuza_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/mk_trade/oppo/reno8t/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/oppo/find_2/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/lp/2023/metody_na_kody_zimowe_luty/125895_Nocne_kody_rabatowe_1_02_karuzeladuza_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/mk_trade/oppo/reno8t/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/oppo/find_2/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/lp/2023/metody_na_kody_zimowe_luty/125895_Nocne_kody_rabatowe_1_02_karuzeladuza_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/mk_trade/oppo/reno8t/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/oppo/find_2/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/lp/2023/metody_na_kody_zimowe_luty/125895_Nocne_kody_rabatowe_1_02_karuzeladuza_1070x360.jpg',
    link: '/details',
  },
  {
    imageLink:
      'https://mediamarkt.pl/media/cache/filemanager_original/images/mk_trade/oppo/reno8t/MediaMarkt_1070x360.jpg',
    link: '/details',
  },
];

export default function AdvertiseCarousel({ advertiseCarousel }: any) {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ prevEl: '#adv-button-left', nextEl: '#adv-button-right' }}
        speed={800}
        className="w-full max-h-full"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {advertiseSlider.map((imageItem, index) => (
          <SwiperSlide className="w-full" key={index}>
            <img
              src={imageItem.imageLink}
              onClick={() => Router.push(imageItem.link)}
              className="w-full h-full aspect-[16_/_5] object-contain cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        id="adv-button-left"
        className="absolute left-[2rem] top-[50%] translate-y-[-50%] bg-black/50 text-white p-4 z-20 rounded-full text-3xl"
      >
        <GoChevronLeft />
      </button>
      <button
        id="adv-button-right"
        className="absolute right-[2rem] top-[50%] translate-y-[-50%] bg-black/50 text-white p-4 z-20 rounded-full text-3xl"
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
