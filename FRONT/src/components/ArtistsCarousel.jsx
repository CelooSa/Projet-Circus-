import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../styles/ArtistsCarousel.scss';

import ArtistCard from '../components/ArtistCard';

const artists = [
  {
    name: "Aurore Lioran",
    discipline: "Tissu aérien, corde lisse",
    bio: "Aurore danse entre ciel et terre, suspendue aux fils invisibles de ses rêves...",
    image: "/images/artistes/aurore-lioran.jpg"
  },
  {
    name: "Elias Faeren",
    discipline: "Feu, pyrotechnie expressive",
    bio: "Elias converse avec le feu. Dans ses mains, les flammes deviennent danseuses...",
    image: "/images/artistes/elias-faeren.jpg"
  },
  {
    name: "Mira Soléa",
    discipline: "Acrobatie poétique, équilibre",
    bio: "Mira marche sur le fil de l’émotion, les pieds nus sur l’improbable...",
    image: "/images/artistes/mira-solea.jpg"
  },
  {
    name: "Noé Haldren",
    discipline: "Trapèze ballant, théâtre aérien",
    bio: "Noé s’élance comme on entre en rêve. Son trapèze est une plume...",
    image: "/images/artistes/noe-haldren.jpg"
  }
];

const ArtistsCarousel = () => {
  return (
    <div className="artist-carousel">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        effect="fade"
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index}>
            <ArtistCard {...artist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtistsCarousel;