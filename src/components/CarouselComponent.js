import React from 'react';
import { Carousel } from 'react-bootstrap';
import Proptypes from 'prop-types';
import towerImage from '../assets/images/tower.jpg';
import '../assets/styles/components/carousel.scss';

const CarouselComponent = ({ imageOfBuilding }) => (
  <Carousel className="container image__card">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imageOfBuilding}
      />
    </Carousel.Item>
  </Carousel>
);

CarouselComponent.propTypes = {
  imageOfBuilding: Proptypes.string.isRequired,
};

export default CarouselComponent;
