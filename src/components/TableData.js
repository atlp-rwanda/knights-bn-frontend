import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { callApiThunk as thunk } from '../redux/thunk/index';
import { requestAction } from '../redux/actions/index';

import convertDate from '../util/convertDate';
import '../assets/styles/styles.scss';


export const TableData = (props) => {
  const {
    id, type, reason, origin, destination, status, departureDate, returnDate,
    cities, createdAt, Comments,
  } = props;

  const action = (message, path) => {
    window.confirm(message)
      ? props.thunk('patch', path, requestAction)
      : '';
  };
  return (
    <tr key={id}>

      <td>{type}</td>

      <td>{reason}</td>

      <td>{origin}</td>
      <td>{destination}</td>

      <td>{status}</td>

      <td>{convertDate(departureDate)}</td>

      <td>{convertDate(returnDate)}</td>
      <td>
        {Array.isArray(cities) ? cities.map(({ name }) => `${name} - `) : `${origin} - ${destination}`}

      </td>
      <td>{convertDate(createdAt)}</td>

      <td>{Comments}</td>
      <td>
        <a
          href="#"
          className="text-success"
          onClick={() => {
            action('Are you sure you want to approve this request?', `/trips/approve/${id}`);
          }}
        >

          Approve
        </a>
        <a
          href="#"
          className="text-danger"
          onClick={() => {
            action('Are you sure you want to reject this request?', `/trips/reject?requestId=${id}`);
          }}
        >

          Reject
        </a>
      </td>
    </tr>
  );
};
export const mapStateToProps = (state) => ({
  approvalMessage: state.request.data.message,
});
const mapDispatchToProps = { thunk };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TableData),
);
