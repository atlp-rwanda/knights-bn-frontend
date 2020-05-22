import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Proptypes from 'prop-types';
import locationImage from '../assets/images/location.jpg';
import likeImage from '../assets/images/like.png';
import dislikeImage from '../assets/images/dislike.png';
import starImage from '../assets/images/star_bold.png';
import '../assets/styles/components/card.scss';
import '../assets/styles/components/btn.scss';

const CardComponent = ({
  accommodationId,
  accommodationName,
  description,
  imageOfBuilding,
  locationName,
  pricePerNight,
  rate,
  streetNumber,
  handleClick,
  roomName,
}) => (
  <Card className="card">
    <Card.Img
      variant="top"
      src={`${imageOfBuilding || locationImage}`}
      className="card__img"
    />
    <Card.Body className="card__body">
      <Card.Title className="card__title">
        {accommodationName}
        <div className="card__likes">
          <img src={`${dislikeImage}`} className="card__img--small" />
          <img src={`${likeImage}`} className="card__img--small" />
        </div>
      </Card.Title>
      <Card.Text className="card__text">
        {locationName}
        {' '}
        -
        {streetNumber}
      </Card.Text>
      <div>
        <img src={`${starImage}`} className="card__img--small" />
        <img src={`${starImage}`} className="card__img--small" />
        <img src={`${starImage}`} className="card__img--small" />
        <img src={`${starImage}`} className="card__img--small" />
        <img src={`${starImage}`} className="card__img--small" />
      </div>
      <Button
        variant="primary"
        className="btn btn__card"
        onClick={() => handleClick({
          accommodationId,
          accommodationName,
          description,
          imageOfBuilding,
          locationName,
          pricePerNight,
          rate,
          streetNumber,
          handleClick,
          roomName,
        })}
      >
        Book now
      </Button>
    </Card.Body>
  </Card>
);
CardComponent.propTypes = {
  accommodationId: Proptypes.number.isRequired,
  accommodationName: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  imageOfBuilding: Proptypes.string.isRequired,
  locationName: Proptypes.string.isRequired,
  pricePerNight: Proptypes.string.isRequired,
  rate: Proptypes.string,
  streetNumber: Proptypes.string.isRequired,
  roomName: Proptypes.string.isRequired,
  handleClick: Proptypes.func.isRequired,
};

CardComponent.defaultProps = {
  rate: '',
};
export default CardComponent;
