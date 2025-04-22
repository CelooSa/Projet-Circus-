import React from "react";
import { Carousel } from "react-bootstrap";
import jongleurFeu from '../Videos/jongleur-feu.mp4'
import cracheurFeu from '../Videos/cracheur-feu.mp4'
import bateauParc from  '../Videos/bateau-parc.mp4'
import funambule from '../Videos/funambule.mp4'
import equilibre from '../Videos/equilibre.mp4'


import "../styles/carousel.scss";


export default function VideoCarousel() {
  return (
    <Carousel className="video-carousel" interval={3000} controls={false} indicators= {true}>
      <Carousel.Item>
        <video autoPlay loop muted>
        <source src={jongleurFeu} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay loop muted>
        <source src={cracheurFeu} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay loop muted>
        <source src={ bateauParc} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay loop muted>
        <source src={ funambule} type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay loop muted>
        <source src={ equilibre} type="video/mp4" />
        </video>
      </Carousel.Item>
    
    </Carousel>
  );
}
