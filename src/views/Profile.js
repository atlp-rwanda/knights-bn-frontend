import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/profile.scss';
import { validateLoginInput } from '../redux/actions/index';
import { withRouter } from 'react-router';
import TextBox from '../components/Textbox';
import Button from '../components/Button';
import { userProfile, updateUserProfile } from '../redux/actions/index';
import { callApiThunk as thunk } from '../redux/thunk/index';
import TextArea from '../components/TextArea';
import convertDate from '../util/convertDate';

export class Profile extends Component {
  state = {
    data: {}, updateSuceed: '', updatedInfos: true, isImageUploaded: true,
    profileWidget: cloudinary.createUploadWidget(
      {
        cloudName: 'niyo', uploadPreset: 'barefootImage', multiple: false,
        cropping: true, croppingShowBackButton: true,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const data = { ...this.state.data };
          data.profileImage = result.info.secure_url;
          this.setState({ data });
          this.setState({ ...this.state,isImageUploaded: true, updatedInfos: false,});
        }
      }
    ),
  };

  async componentDidMount() {
    await this.props.thunk('get', '/user/profile', userProfile);
    const userInfo = this.props.userInformation.user;
    this.setState({ data: userInfo });
    const convertBirthDay = convertDate(this.state.data.birthDay);
    this.setState({ data: { ...this.state.data, birthDay: convertBirthDay },});
  }
  updateUser = async (e) => {
    e.preventDefault();
    await this.props.thunk('patch','/edit/user/profile',updateUserProfile,this.state.data);
    this.setState({ updateSuceed: 'Profile updated successfully', updatedInfos: true,});
  };
  handleChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value },});
    this.setState({ updateSuceed: '', updatedInfos: false });
  };
  showWidget = () => {this.state.profileWidget.open();};

  render() {
    return (
      <form className="ProfileForm">
        <label className="label">My Profile</label>
        <div className="formContainer">
          <div className="form-group">
            <img src={this.state.data.profileImage}className="profileImage"/>
            <Button onClick={this.showWidget} label="Change" className="imageChangebtn"/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="firstName" placeholder="First Name" 
              onChange={this.handleChange} isProfile={true} value={this.state.data.firstName}/>
            </div>
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="lastName" placeholder="Last Name" 
              onChange={this.handleChange} isProfile={true} value={this.state.data.lastName}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select className="form-control" name="gender" onChange={this.handleChange} isProfile={true}>
                <option>{this.state.data.gender}</option> <option>female</option> <option>male</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="passport" placeholder="Passport Number"
               onChange={this.handleChange} isProfile={true} value={this.state.data.passport} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="form-group">
                <TextBox className="form-control" name="email" placeholder="email" 
                onChange={this.handleChange} isProfile={true} 
                value={this.state.data.email} disabled="true"/>
              </div>
            </div>
            <div className="form-group col-md-6">
              <select className="form-control" name="lineManager" 
              onChange={this.handleChange} isProfile={true}>
                <option>{this.state.data.lineManager}</option>
                <option>william.ishimwe@andela.com</option>
                 <option>eugene.munyampundu@gmail.com</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="form-group">
                <input type="date" className="form-control" name="birthDay"
                 onChange={this.handleChange} isProfile={true} value={this.state.data.birthDay} 
                 max={convertDate(new Date())} />
              </div>
            </div>
            <div className="form-group col-md-6">
              <select className="form-control" name="language"
               onChange={this.handleChange} isProfile={true}>
                <option>{this.state.data.language}</option> <option>Frensh</option> 
                <option>English</option><option>Kinyarwanda</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select className="form-control"
                name="currency" onChange={this.handleChange}
                isProfile={true}> <option>{this.state.data.currency}</option>
                <option>Rwf</option><option>US Dollar</option><option>Euro</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="homeTown" placeholder="Home Town" 
              onChange={this.handleChange} isProfile={true} value={this.state.data.homeTown}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="role" placeholder="user role" 
              value={this.state.data.role} disabled="true" 
              onChange={this.handleChange} isProfile={true}/>
            </div>
            <div className="form-group col-md-6">
              <TextBox className="form-control" name="department" placeholder="Department"
               onChange={this.handleChange} isProfile={true} value={this.state.data.department}/>
            </div>
          </div>
          <div className="form-group">
            <TextArea className="form-control" name="biography" rows="3" placeholder="Biography" 
            onChange={this.handleChange} isProfile={true}value={this.state.data.biography}/>
          </div>
          <div className="form-row">
            <div>
              <Button onClick={(e) => location.reload(e)} label="cancel" variant="secondary"/>
            </div>
            <div>
              <Button onClick={(e) => this.updateUser(e)} label="update" 
              className="float-left" disabled={this.state.updatedInfos}/>
            </div>
            <label className="text-success mt-2"> {this.state.updateSuceed}</label>
          </div>
        </div>
      </form>
    );
  }
}

export const mapStateToProps = (state) => ({
  userInformation: state.user.data,
  updatedInfo: state.user.updatedUser,
});

const mapDispatchToProps = {
  validateInput: validateLoginInput,
  thunk,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
