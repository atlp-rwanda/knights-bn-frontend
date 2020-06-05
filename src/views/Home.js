
import React from 'react';
import { v4 as uniqueId } from 'uuid';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardComponent from '../components/Card';
import '../assets/styles/containers/home.scss';
import '../assets/styles/containers/loginPage.scss';
import { getAccommodations } from '../redux/actions/actions';
import { callApiThunk as thunk } from '../redux/thunk';
import NavBar from '../components/Nav';
import Chat from '../components/Chat';

class Home extends React.Component {
  state = {
    accommodations: [],
    isLoading: false,
    clickedAccommodation: {},
    isBtnClicked: false,
  };

  async componentDidMount() {
    this.setState(({
      ...this.state,
      isLoading: true,
    }));
    await this.props.thunk('get', '/view/accommodations', getAccommodations);
    this.setState(({
      ...this.state,
      accommodations: this.props.accommodations.data,
      isLoading: false,
    }));
  }

  handleClick = (accommodationOfInterest) => {
    this.setState(({
      ...this.state,
      clickedAccommodation: { ...accommodationOfInterest },
      isBtnClicked: true,
    }));
  };

  render() {
    if (this.state.isBtnClicked) {
      this.setState(({
        ...this.state,
        isBtnClicked: false,
      }));
      const {
        accommodationName,
        locationName,
        streetNumber,
        description,
        imageOfBuilding,
        accommodationId,
        pricePerNight,
        roomName,
      } = this.state.clickedAccommodation;
      return (
        <Redirect
          to={{
            pathname: '/book',
            state: {
              accommodationName,
              locationName,
              streetNumber,
              description,
              imageOfBuilding,
              pricePerNight,
              accommodationId,
              roomName,
            },
          }}
        />
      );
    }
    const allAccommodations = this.state.accommodations.map((accommodation) => (
      <CardComponent
        accommodationName={accommodation.accommodationName}
        imageOfBuilding={accommodation.imageOfBuilding}
        locationName={accommodation.locationName}
        rate={accommodation.rate}
        streetNumber={accommodation.streetNumber}
        description={accommodation.description}
        pricePerNight={accommodation.availableRooms[0].price}
        roomName={accommodation.availableRooms[0].roomName}
        accommodationId={accommodation.id}
        key={uniqueId()}
        handleClick={this.handleClick}
      />
    ));
    return (
      <div>
        <NavBar />
        <Chat />
        <Spinner
          animation="border"
          variant="primary"
          className={
            this.state.isLoading ? 'spinner--position__center' : 'hide'
          }
        />
        <div className="cards container">{allAccommodations}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  thunk,
};
const mapStateToProps = (globalState) => ({
  accommodations: globalState.user.accommodations,
});

Home.propTypes = {
  accommodations: PropTypes.object,
};
Home.defaultProps = {
  accommodations: {},
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
