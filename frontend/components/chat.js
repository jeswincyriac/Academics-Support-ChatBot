import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GiftedChat} from "react-native-gifted-chat"
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class Chat extends React.Component {
    state={
        messages:[],
        reply:{}
    }

    componentWillMount() {
    this.setState({
    messages: [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      })
    }

    onSend(messages = []) {
   this.setState(previousState => ({
   messages: GiftedChat.append(previousState.messages, messages),
   }))

   //console.log(messages[0].text)

       fetch('http://10.0.2.2:8000/api/message', {
    method: 'POST',
    body: JSON.stringify({
            "string":messages[0].text
    })
    }).then((response) => response.json())
    .then ((res) =>{

    console.log(res["success"])



    this.setState(previousState => ({
    messages: GiftedChat.append(previousState.messages, [
        {
        _id: Math.round(Math.random() * 1000000),
        text: res["success"],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent: true,
        received: true
      },
    ]),
    }))


})



   }

  render() {


    return (
        <View style={{
                flex:1
            }}>
      <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
         user={{
           _id: 1,
         }}
          ></GiftedChat>
       <KeyboardSpacer/>
       </View>
    );
  }
}
