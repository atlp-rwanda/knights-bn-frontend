/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import io from 'socket.io-client';
import moment from 'moment';
import ReactDom from 'react-dom';
import $ from 'jquery';
import { withRouter } from 'react-router';
import { callApiThunk as thunk } from '../redux/thunk/index';
import { chats as allChat } from '../redux/actions/index';
import '../assets/styles/home.scss';

const ioClient = io.connect('https://knights-bn-backnd.herokuapp.com/');

export class Chat extends Component {
    state = {
      chats: [],
      message: '',
      author: '',
      myMessage: {},
      token: '',
      client: {},
      newMessage: {},
      formSubmitted: false,
      hidden: true,
      isHidden: true,
    };


    async componentDidMount() {
      const listen = ioClient.on('send-chat-message-2');
      await this.props.thunk('get', '/chat', allChat);
      const chat = this.props.chatData.data;
      const userToken = localStorage.getItem('user-token');
      const { lastName, firstName } = jwt.decode(userToken);
      const name = `${firstName} ${lastName}`;
      this.setState({
        ...this.state,
        chats: chat,
        author: name,
        token: userToken,
        client: ioClient,
      });
    }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      message: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.message) {
      const { message, token } = this.state;
      const msg = { token, message };
      this.setState({
        ...this.state,
        myMessage: msg,
        formSubmitted: true,
      });
      ioClient.emit('send-chat-message', msg);
    }
    this.setState({
      ...this.state,
      message: '',
    });
  };

  toggleChat = () => {
    const { isHidden } = this.state;
    this.setState({
      ...this.state,
      isHidden: !isHidden,
    });
  };

  render() {
    ioClient.on('send-chat-message-2', (element) => {
      if (element.from === this.state.author) {
        $('#message-thread').append($('<li class="mines">').html(`<div class="author">${element.from}</div> <div class="message">${element.message}</div> <div class="time">${moment().calendar()}</div>`));
      } else {
        $('#message-thread').append($('<li class="others">').html(`<div class="author">${element.from}</div> <div class="message">${element.message}</div> <div class="time">${moment().calendar()}</div>`));
      }
      $('#message-side').animate({ scrollTop: $('#message-side').prop('scrollHeight') }, 500);
    });


    const { chats, author } = this.state;
    return (
      <div>
        <div className={this.state.isHidden ? 'hide' : 'chart'}>
          <div className="chart-header">
            <h1>CHAT</h1>
            <h3>
              <i className="fa fa-circle" />
              {author.toLowerCase()}
            </h3>
          </div>
          <div className="chart-body">
            <div className="message-side" id="message-side">
              <ul className="message-thread" id="message-thread">
                {chats
                  && chats.map((msg) => {
                    if (msg.senderName === this.state.author) {
                      return (
                        <li key={msg.id} className="mines">
                          <div className="author">{msg.senderName}</div>
                          <div className="message">{msg.message}</div>
                          <p className="time">
                            {moment(msg.createdAt).calendar()}
                          </p>
                        </li>
                      );
                    }
                    return (
                      <li key={msg.id} className="others">
                        <div className="author">{msg.senderName}</div>
                        <div className="message">{msg.message}</div>
                        <p className="time">
                          {moment(msg.createdAt).calendar()}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="type-side">
              <form>
                <input
                  value={this.state.message}
                  placeholder="send a message"
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  className="send-Chat-Message"
                  onClick={this.handleSubmit}
                >
                  <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="chart-toggle" onClick={this.toggleChat}>
          <i className="fa fa-comments" />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  chatData: state.user.chats,
  token: state.user.token,
});

const mapDispatchToProps = {
  thunk,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));
