import React, { useState, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router';
import '../assets/styles/approvals.scss';
import { callApiThunk as thunk } from '../redux/thunk/index';
import TableData from '../components/TableData';
import { pendingRequests } from '../redux/actions/index';
import userRole from '../util/userRole';
import Alert from '../components/Alert';

export const PendingRequest = (props) => {
  userRole() !== 'manager'
    ? (localStorage.setItem('lost-message', 'you are not allowed to access this page!!!'),
    (window.location.href = '/lost')) : null;
  const [data, setData] = useState([]);
  useLayoutEffect(() => { props.thunk('get', '/trips/pendingApproval', pendingRequests);
  }, [props.approvalMessage]);
  useEffect(() => { setData(props.requestsData ? props.requestsData : []);
  }, [props.requestsData]);
  return (
    <div className="requestPageForm">
      <h1>Pending requests</h1>
      <Alert isError={!!props.errorMessage} message={props.errorMessage} />
      <Alert isSuccess={!!props.approvalMessage} message={props.approvalMessage} />
      <Table striped bordered hover className="usersTable"><thead><tr>
        <th>type</th> <th>reason</th> <th>origin</th> <th>destination</th> <th>status</th>
        <th>departureDate</th> <th>returnDate</th> <th>cities</th> <th>requestedAt</th> <th>Comments</th> <th>action</th>
        </tr></thead><tbody> {data.map((request) => (<TableData {...request} />))}</tbody>
      </Table> </div>);
};
export const mapStateToProps = (state) => ({
  requestsData: state.request.data.pendingRequests,
  approvalMessage: state.request.approvalData.message,
  errorMessage: state.request.approvalData.error,
});
const mapDispatchToProps = { thunk };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PendingRequest),
);
