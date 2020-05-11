import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Form, Col, input } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../assets/styles/adminPage.scss";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import TextBox from "../components/Textbox";
import Alert from "../components/Alert";
import Pagination from '../components/Pagination';

import {
  viewAllUsers,
  viewOneUser,
  updateUserRole,
} from "../redux/actions/index";
import { callApiThunk as thunk } from "../redux/thunk/index";


const searchFor = (term) => {
  return (x) => {
    return (x.firstName.toLowerCase().includes(term.toLowerCase()) || x.email.toLowerCase().includes(term.toLowerCase()) || x.lastName.toLowerCase().includes(term.toLowerCase())) || !term
  }
}

export class Admin extends Component {

    state = {
      data: [],
      datas: {},
      error: " ",
      showModal: false,
      role: "",
      message: "",
      email: "",
      term: "",
      currentPage: 1,
      usersPerPage: 10,
      formSubmitted: false,
    };
  
  async componentDidMount() {
    await this.props.thunk("get", "/users", viewAllUsers);
    const allUsers = this.props.userData;
    this.setState({
        ...this.state,
        data: allUsers.Users
    })  

  }
  async componentDidUpdate() {
    if(this.state.formSubmitted){
        await this.props.thunk("get", `/users/${this.state.datas.email}`, viewOneUser)
        const updatedUser = this.props.userInfo;
      const updatedUsers = this.state.data.map((user) => { 
        if (user.email === updatedUser.User.email) {
          return updatedUser.User
        } return user;
      })
        this.setState({
            ...this.state,
            data: updatedUsers,
            formSubmitted: false,
        });  
    }
  }


   handleChange = (event) => {
    this.setState({
      ...this.state,
      term: event.target.value,
    });
  }

   handleSubmit = async (e) => {
     e.preventDefault();
    const userRole = {
      role: this.state.role,
    };
    await this.props.thunk(
      "patch",
      `/users/setUserRole?email=${this.state.datas.email}`,
      updateUserRole,
      userRole
    );
     const newRoleInfo = this.props.UpdateInfo; 
    this.setState({
        ...this.state,
        message: newRoleInfo,
        formSubmitted: true,
    });
  }

  findOne = async (email) => {
    await this.props.thunk("get", `/users/${email}`, viewOneUser);
    const onlyOneUser = this.props.userInfo;
    this.setState({ 
      ...this.state,
      datas: onlyOneUser.User 
    });
  }

  onSelectRole = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      role: e.target.value,
    });
  }

  handleClose = () => this.setState({
      message: '',
      showModal: false
  });
  handleShow = () => this.setState({
      showModal: true
  })


  render() {
    const { email, role } = this.state.datas;
    const { message, data, currentPage,usersPerPage,  } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const currentUser = (data.length)?data.slice(indexOfFirstUser, indexOfLastUser):[];
     const paginate = (pageNumber) => this.setState({
       ...this.state,
       currentPage: pageNumber
     })

    return (
      <div className="adminPageForm">
        <form>
          <input
            id="adminSearchEmailInput"
            onChange={this.handleChange}
            placeholder="type here to search"
          />
        </form>
        <Table striped bordered hover className="usersTable">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUser
              ? currentUser.filter(searchFor(this.state.term)).map((user) => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <a
                        href="#"
                        onClick={() => {
                          this.findOne(user.email);
                          this.handleShow();
                        }}
                      >
                        update Role
                      </a>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
        <Pagination usersPerPage={usersPerPage} totalUsers={data.length} paginate={paginate} />
        <Modal className="Modal" show={this.state.showModal} onHide={this.handleClose} centered>
          <Modal.Header
            className="ModalHeader"
            closeButton
          >
            <h1>Role Update</h1>
          </Modal.Header>
          <Modal.Body>
            <div className="alertMessage">{message}</div>
            <Form className="UpdateRoleForm" onSubmit={this.handleSubmit}>
              <Form.Control as="select" onChange={this.onSelectRole}>
                <option>{role}</option>
                <option value="manager">manager</option>
                <option value="requester">requester</option>
                <option value="superAdmin">superAdmin</option>
                <option value="traveladmin">travel Admin</option>
                <option value="travelTeamMember">travelTeamMember</option>
              </Form.Control>
              <TextBox
                variant="primary"
                type="submit"
                label="UPDATE ROLE"
                id="UpdateFormButton"
              />
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    test:state,
    userData: state.user.data,
    userInfo: state.user.datas,
    UpdateInfo: state.user.data.message,
  };
};

const mapDispatchToProps = {
  thunk,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
