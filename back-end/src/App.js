import React, { Component } from "react";
import "./App.css";
import "./static/css/chat_interface.css";
import "./static/css/temporary.css";
import axios from "axios";

class SendButton extends Component {
  render() {
    return (
      <div className="send_message" onClick={this.props.handleClick}>
        <div className="text" style={{ fontWeight: "bold" }}>
          send
        </div>
      </div>
    );
  }
}

class MessageTextBoxContainer extends Component {
  render() {
    return (
      <div className="message_input_wrapper">
        <input
          id="msg_input"
          className="message_input"
          placeholder="Type your messages here..."
          value={this.props.message}
          onChange={this.props.onChange}
          onKeyPress={this.props._handleKeyPress}
        />
      </div>
    );
  }
}

class Avartar extends Component {
  render() {
    return <div className="avatar" />;
  }
}

class UserMessageBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={`message ${this.props.appearance} appeared`}>
        <Avartar />
        <div className="text_wrapper">
          <div className="text">{this.props.message}</div>
        </div>
      </li>
    );
  }
}

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.createBotMessages = this.createBotMessages.bind(this);
  }

  scrollToBottom = () => {
    var el = this.refs.scroll;
    el.scrollTop = el.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  createBotMessages() {
    return this.props.messages.map((message, index) => (
      <UserMessageBox
        key={index}
        message={message["message"]}
        appearance={message["isbotmessage"] ? "left" : "right"}
      />
    ));
  }

  render() {
    return (
      <ul className="messages" ref="scroll">
        {this.createBotMessages()}
      </ul>
    );
  }
}

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.intro = "Welcome at PIXEL!";
    this.handleClick = this.handleClick.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addMessageBox = this.addMessageBox.bind(this);
    this.state = { messages: [], message: "", current_message: "" };
    this.prefix =
      "This person's photos were unwillingly spread on internet. Here is their message: ";
    this.postfix =
      " Please reply in 3 sentences in a reassuring and supportive manner. Please note that this conversation is for demo purposes so be bright and short";
  }

  componentDidMount() {
    this.setState({
      messages: [
        ...this.state.messages,
        { message: this.intro, isbotmessage: true },
      ],
    });
    console.log(this.state);
  }

  addMessageBox(enter = true) {
    let messages = this.state.messages;
    let current_message = this.state.current_message;
    //let total = this.state.prefix + this.state.current_message + this.postfix;
    let total = this.state.current_message;
    if (current_message && enter) {
      messages = [...messages, { message: current_message }];
      axios
        .post("http://localhost:8080/chat", { prompt: total })
        .then((result) => {
          let data = result.data.trim();
          console.log("data:" + data);
          this.setState({
            messages: [...messages, { message: data, isbotmessage: true }],
          });
        })
        .catch((err) => {
          console.error(err);
        });
      current_message = "";
    }
    this.setState({
      current_message: current_message,
      messages,
    });
  }

  handleClick() {
    this.addMessageBox();
  }

  onChange(e) {
    this.setState({
      current_message: e.target.value,
    });
  }

  _handleKeyPress(e) {
    let enter_pressed = false;
    if (e.key === "Enter") {
      enter_pressed = true;
    }
    this.addMessageBox(enter_pressed);
  }

  render() {
    return (
      <div className="chat_window">
        <MessagesContainer messages={this.state.messages} />
        <div className="bottom_wrapper clearfix">
          <MessageTextBoxContainer
            _handleKeyPress={this._handleKeyPress}
            onChange={this.onChange}
            message={this.state.current_message}
          />
          <SendButton handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ChatApp;
