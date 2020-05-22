import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';
import '../assets/styles/components/bookingCard.scss';
import Proptypes from 'prop-types';
import Line from './line';
import calculateDifference from '../util/calculateDateDifference';
import { callApiThunk as thunk } from '../redux/thunk';
import { bookAccommodation } from '../redux/actions/actions';
import '../assets/styles/containers/loginPage.scss';
import Alert from './Alert';
import DateInput from './DateInput';

const BookingCard = ({
  pricePerNight, roomName, accommodationId, bookedAccommodation, thunk,
}) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [totalFee, setTotalFee] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isBooked, setIsBooked] = useState(false);


  useEffect(() => {
    if (bookedAccommodation && (bookedAccommodation.status == 200)) {
      setMessage(bookedAccommodation.message);
    } else if (bookedAccommodation) {
      setError(bookedAccommodation.message || bookedAccommodation.error);
    }
  }, [bookedAccommodation]);

  const handleChange = (target) => {
    setIsBooked(false);
    setIsChecked(false);
    setError('');
    if (target.name === 'checkInDate') setCheckInDate(target.value);
    else if (target.name === 'checkOutDate') setCheckOutDate(target.value);
  };

  const handleClick = async () => {
    const daysBooked = calculateDifference(checkOutDate, checkInDate);
    if (daysBooked) {
      setTotalFee(pricePerNight * daysBooked);
      setIsChecked(true);
    }
    if (isChecked) {
      setMessage('');
      setError('');
      const requestBody = {
        accomodationId: `${accommodationId}`,
        roomName,
        checkinDate: checkInDate,
        checkoutDate: checkOutDate,
      };
      setIsLoading(true);
      await thunk(
        'post',
        '/book/accommodations',
        bookAccommodation,
        requestBody,
      );
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Spinner
        animation="border"
        variant="primary"
        className={isLoading ? 'spinner--position__center' : 'hide'}
      />
      <Alert isError={!!error} message={error} isAnimated className="card__alert container" />
      <Alert isSuccess={!!message} message={message} isAnimated className="card__alert container" />
      <div className="card__container">
        <span className="card__header">
          $
          {pricePerNight}
        </span>
        {' / night'}
        <div className="card__body">
          <DateInput label="CHECK-IN" name="checkInDate" value="checkinDate" handleChange={handleChange} />
          <DateInput label="CHECK-OUT" name="checkOutDate" value="checkoutDate" handleChange={handleChange} />
        </div>
        <Line />
        <span className={isChecked ? 'card__header' : 'hide'}>
          {' '}
          Total fee: $
          {totalFee}
        </span>
        <div>
          <Button className={!isChecked ? 'btn' : 'hide'} onClick={() => handleClick()}>Check price</Button>
          <Button className={isChecked ? 'btn' : 'hide'} onClick={() => handleClick()}>
            {isBooked ? 'Thank you.'
              : (error === 'Room not available')
                ? 'Not available '
                : !error
                  ? 'Book now'
                  : 'Retry'}
          </Button>
        </div>

      </div>
    </div>


  );
};

const mapDispatchToProps = {
  thunk,
};
const mapStateToProps = (globalState) => ({
  bookedAccommodation: globalState.user.bookedAccommodation,
});

BookingCard.propTypes = {
  pricePerNight: Proptypes.string.isRequired,
  roomName: Proptypes.string.isRequired,
  accommodationId: Proptypes.string.isRequired,
  bookedAccommodation: Proptypes.object,
  thunk: Proptypes.func.isRequired,
};

BookingCard.defaultProps = {
  bookedAccommodation: {},
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookingCard),
);
