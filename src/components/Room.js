import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RoomColumn from './RoomColumn';
import Input from './Input';

const Room = ({ handleChange, showWidget }) => (
  <div>
    <Input type="text" placeholder="Number of rooms" name="numberOfRooms" handleChange={handleChange} />
    <Row className="accomodationFormRow">
      <RoomColumn label="Room type" type="text" placeholder="Room Type" name="roomType" handleChange={handleChange} />
      <RoomColumn label="Room Name" type="text" placeholder="Room Name" name="roomName" handleChange={handleChange} />
      <RoomColumn label="Price/Night" type="text" placeholder="Number of rooms" name="price" handleChange={handleChange} />
    </Row>
    <button
      onChange={(event) => handleChange(event.target)}
      onClick={showWidget}
      id="Upload"
    >
      UPLOAD PHOTO
    </button>
  </div>
);

Room.propTypes = {
  handleChange: PropTypes.func.isRequired,
  showWidget: PropTypes.func.isRequired,
};

export default Room;
