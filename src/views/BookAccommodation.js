import React from 'react';
import Proptypes from 'prop-types';
import Nav from '../components/Nav';
import BookingCard from '../components/BookingCard';
import CarouselComponent from '../components/CarouselComponent';
import '../assets/styles/containers/bookAccommodation.scss';

const BookAccommodation = ({ location }) => {
  const {
    accommodationName,
    locationName,
    streetNumber,
    description,
    imageOfBuilding,
    pricePerNight,
    roomName,
    accommodationId,
  } = location.state;
  return (
    <div>
      <Nav />
      <div>
        <div className="booking__header">
          <h5>{accommodationName}</h5>
          <span>
            {locationName}
            {' '}
            |
            {streetNumber}
            {' '}
          </span>
        </div>
        <div className="booking__body">
          <CarouselComponent imageOfBuilding={imageOfBuilding} />
          <BookingCard
            pricePerNight={pricePerNight}
            roomName={roomName}
            accommodationId={accommodationId}
          />
        </div>
        <div className="booking__footer">
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  );
};
BookAccommodation.propTypes = {
  location: Proptypes.object.isRequired,
};
export default BookAccommodation;
