import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?'
        },
        {
          id: 2,
          username: 'Anonymous',
          content:
            'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    };
    this.receiveData = this.receiveData.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      //Add new message
      const newMessage = {
        id: 3,
        username: 'Michelle',
        content: 'Hello there!'
      };
      const messages = this.state.messages.concat(newMessage);

      this.setState({ messages: messages });
    }, 3000);
  }

  receiveData(data) {
    console.log('receiveData <App />');
    const oldMessages = this.state.messages;
    let newData = {
      id: this.state.messages.length + 1,
      username: data.username,
      content: data.message
    }
    const newMessages = [...oldMessages, newData];
    this.setState({ messages: newMessages });
  }

  render() {
    console.log('RENDERING <App />');
    console.log('Returning New messages', this.state.messages);
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser.name}
          sendData={this.receiveData}
        />
      </div>
    );
  }
}
export default App;
