/* eslint-disable camelcase */
import React, { Component } from 'react';
import '../../assets/styles/components/getStatistics.scss';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table, Badge } from 'react-bootstrap';
import { callApiThunk } from '../../redux/thunk/index';
import { allMyrequests } from '../../redux/actions/requestActions';
import Nav from '../Nav';
import { Stats, TableHeader } from '../../util/reusableTableHeader';

class numberOfTrips extends Component {
  state = {
    allRequests: [],
    data: [],
    upToNow: new Date(),
    intervel: 0,
    trips: 0,
    pending: 0,
    rejected: 0,
    startDate: '',
  };


  async UNSAFE_componentWillMount() {
    await this.props.callApiThunk('get', '/trips/myrequest', allMyrequests);
    this.setState({
      allRequests: this.props.userStats,
      data: this.props.userStats.filter((trip) => trip.status === 'approved'),
      pending: this.props.userStats.filter((trip) => trip.status === 'pending'),
      rejected: this.props.userStats.filter((trip) => trip.status === 'rejected'),
      trips: this.props.userStats.filter((trip) => trip.status === 'approved').length,
      startDate: (this.props.userStats.filter((trip) => trip.status === 'approved').length)
        ? this.props.userStats.filter((trip) => trip.status === 'approved')[0].departureDate
        : '',
      interval: (this.props.userStats.filter((trip) => trip.status === 'approved').length)
        ? new Date(this.props.userStats.filter((trip) => trip.status === 'approved')[0].departureDate).getDate() - new Date().getDate()
        : 0,
    });
  }


  render() {
    return (
      <>
        <Nav />
        <div className="requestPageForm stats-layout">
          <div className="history">
            <Stats length={this.state.allRequests.length} titleText="Total requests" className="total" />
            <Stats length={this.state.rejected.length} titleText="Rejected" className="rejected" />
            <Stats length={this.state.pending.length} titleText="Pending" className="pending" />
          </div>

          <div className="stats">
            <div className="trips-from">
              <h6>Time you started to travel</h6>
              <span>
                <Badge variant="secondary">
                  {(this.state.data.length)
                    ? moment(this.state.startDate).format('DD/MM/YYYY')
                    : "You haven't traveled yet"}
                </Badge>
              </span>
            </div>
            <div className="trips-to">
              <h6>Up to now on</h6>
              <span>
                <Badge variant="secondary">{ moment(this.state.upToNow).format('DD/MM/YYYY')}</Badge>
              </span>
            </div>

          </div>
          <div className="stats-numbers">
            <div className="trip-interval">
              <h6>Last</h6>
              <span>
                {this.state.intervel}
                {' '}
                days
              </span>
            </div>
            <div className="trip-made">
              <h6>Trips you have made</h6>
              <span>
                <Badge variant="secondary">
                  { this.state.trips}
                </Badge>
              </span>
              <p />
            </div>
          </div>
          <div className="approved-request">
            <div className="trip-details">
              <h3>Trips details</h3>
            </div>
            <Table striped>
              <TableHeader thTitle={['Origin', 'Destination', 'Reason', 'DepatureDate', 'ReturnDate', 'Status']} />
              <tbody>
                {(this.state.data.length) ? this.state.data.filter((tripItem) => tripItem.status === 'approved').map((trip) => (
                  <tr key={trip.id}>
                    <td>{trip.origin}</td>
                    <td>{trip.destination}</td>
                    <td>{trip.reason}</td>
                    <td>{moment(trip.departureDate).format('DD/MM/YYYY')}</td>
                    <td>{moment(trip.returnDate).format('DD/MM/YYYY')}</td>
                    <td>{trip.status}</td>
                  </tr>
                )) : null}

              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToprops = (state) => ({
  userStats: state.statsReducer.allMyRequest,
});
export default connect(mapStateToprops, { callApiThunk })(numberOfTrips);
