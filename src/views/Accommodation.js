import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Form, Row, Button, Spinner,
} from 'react-bootstrap';
import { withRouter } from 'react-router';
import '../assets/styles/accommodation.scss';
import { callApiThunk as thunk } from '../redux/thunk/index';
import { createAccommodation, setLoadingStatus } from '../redux/actions/index';
import Room from '../components/Room';
import Alert from '../components/Alert';
import NavSupplier from '../components/NavSupplier';
import RoomColumn from '../components/RoomColumn';
import Input from '../components/Input';

const Accommodation = (props) => {
  const [accommodation, setAccommodation] = useState('');
  const [location, setLocation] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [roomsNumber, setRoomsNumber] = useState('');
  const [room, setRoom] = useState({
    roomName: '',
    roomType: '',
    price: '',
    available: 'true',
  });
  const [image, setImage] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [profileWidget] = useState(
    cloudinary.createUploadWidget(
      {
        cloudName: 'niyo',
        uploadPreset: 'barefootImage',
        multiple: false,
        cropping: true,
        resourceType: 'image',
        croppingShowBackButton: true,
      },
      (err, result) => {
        if (!err && result && result.event === 'success') {
          setImage(() => result.info.secure_url);
        }
      },
    ),
  );

  const showWidget = () => {
    profileWidget.open();
  };

  const handleChange = (target) => {
    if (target.name === 'accommodation') {
      setAccommodation(() => target.value);
    } else if (target.name === 'location') {
      setLocation(() => target.value);
    } else if (target.name === 'streetNumber') {
      setStreetNumber(() => target.value);
    } else if (target.name === 'numberOfRooms') {
      setRoomsNumber(() => target.value);
    } else if (target.name === 'roomType') {
      setRoom(() => ({ ...room, roomType: target.value }));
    } else if (target.name === 'roomName') {
      setRoom(() => ({ ...room, roomName: target.value }));
    } else if (target.name === 'price') {
      setRoom(() => ({ ...room, price: target.value, available: 'true' }));
    } else if (target.name === 'additionalInfo') {
      setOtherInfo(() => target.value);
    }
  };

  const handleSubmit = async () => {
    setError(() => '');
    setMessage(() => '');
    const requestBody = {
      accommodationName: accommodation,
      locationName: location,
      streetNumber,
      numberOfRooms: roomsNumber,
      description: otherInfo,
      imageOfBuilding: image,
      availableRooms: [{ ...room }],
    };
    props.setLoadingStatus(true);
    await props.thunk(
      'post',
      '/create/accommodation',
      createAccommodation,
      requestBody,
    );
    props.setLoadingStatus(false);
  };
  useEffect(() => {
    if (props.createdAccommodation) {
      if (props.createdAccommodation.error) {
        setError(() => props.createdAccommodation.error);
      } else if (props.createdAccommodation.errorMessage) {
        setError(() => props.createdAccommodation.errorMessage);
      } else if (!props.createdAccommodation.error) {
        setMessage(() => 'accommodation created successfully');
      }
    }
  }, [props.createdAccommodation]);

  return (
    <div>
      <NavSupplier />
      <Spinner
        animation="border"
        variant="primary"
        className={props.isLoading ? 'spinner--position__center' : 'hide'}
      />
      <div className="accomodation">
        <div id="AccommodationHeader">
          <h1>CREATE ACCOMMODATION</h1>
        </div>
        <Form.Group className="accomodationForm">
          <Alert isError={!!error} message={error} isAnimated />
          <Alert isSuccess={!!message} message={message} isAnimated />
          <Input type="text" placeholder="Accommodation Name" name="accommodation" handleChange={handleChange} />
          <Row className="accomodationFormRow">
            <RoomColumn type="text" placeholder="Location" name="location" handleChange={handleChange} />
            <RoomColumn type="text" placeholder="street number" name="streetNumber" handleChange={handleChange} />
          </Row>
          <Room handleChange={handleChange} showWidget={showWidget} />
          <textarea
            onChange={(event) => handleChange(event.target)}
            className="form-control"
            id="TextAreaInput"
            as="textarea"
            rows="3"
            name="additionalInfo"
            placeholder="Additional Info"
          />
          <Button variant="secondary" type="submit">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </div>
    </div>
  );
};

const mapStateToProps = (globalState) => ({
  apiMessage: globalState.user.data,
  createdAccommodation: globalState.user.createdAccommodation,
  isLoading: globalState.eventHandler.isLoading,
});

const mapDispatchToProps = {
  thunk,
  setLoadingStatus,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Accommodation),
);
