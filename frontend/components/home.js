import React from 'react';
import { StyleSheet, Text, View,ImageBackground,
TouchableWithoutFeedback,
TouchableOpacity
 } from 'react-native';
 import TextInput from 'react-native-material-textinput';
import DismissKeyboard from 'dismissKeyboard';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  render() {
    return (
        <ImageBackground style={{flex:1,
            justifyContent:"center",
            alignItems:"center"
        }} source={require('./images/backgroundpic.jpg')}
            blurRadius={5}>

        <View style={{

            width:250,
            //backgroundColor:"rgba(0,0,0,0.3)"

        }}>
            <TextInput  style={{
                width:250
            }}
                                   label="Name"
                                   labelColor="#90CAF9"
                                   labelActiveColor="#90CAF9"
                                   underlineColor="#fff"
                                   underlineActiveColor="#90CAF9"
                                   color="#fff"
                                   autoCorrect={false}

                                   onChangeText={(text) => {this.props.update("Username",text)}}
                                   />
           <TextInput  style={{
               width:250
           }}
                                  label="class"
                                  labelColor="#90CAF9"
                                  labelActiveColor="#90CAF9"
                                  underlineColor="#fff"
                                  underlineActiveColor="#90CAF9"
                                  color="#fff"
                                  autoCorrect={false}

                                  onChangeText={(text) => {this.props.update("class",text)}}
                                  />
              <TextInput  style={{
                  width:250
              }}
                                     label="rollno"
                                     labelColor="#90CAF9"
                                     labelActiveColor="#90CAF9"
                                     underlineColor="#fff"
                                     underlineActiveColor="#90CAF9"
                                     color="#fff"
                                     autoCorrect={false}

                                     onChangeText={(text) => {this.props.update("rollno",text)}}
                                     />
             <TouchableOpacity
                       style={{
                           padding: 24,
                        alignItems: 'center',
                        justifyContent:"center",
                        marginTop:20,
                        }}
                       onPress={this.login}>
                               <View style={{

                                       height:36,
                                       alignItems:"center",
                                       justifyContent:"center",
                                       width:88,
                                       borderColor:"#ffff",
                                       borderRadius:100,
                                       borderWidth:2,
                                       paddingLeft:16,
                                       paddingRight:16,
                                       backgroundColor: 'rgba(168,168,168,.3)',

                                   }}>
                                <Text style={{
                                    fontSize:13,
                                    color:"#fff"
                                }}>LOG IN</Text>
                                </View>
                       </TouchableOpacity>

        </View>

        </ImageBackground>
    );
  }
  login = () => {
           Actions.chat()
                           fetch('http://10.0.2.2:8000/api/login', {
                   method: 'POST',
                   body: JSON.stringify({
                        "name":this.props.Userdetails.Username,
                        "class":this.props.Userdetails.class,
                        "rollno":this.props.Userdetails.rollno
                      })
                }).then((response) => response.json())
                .then ((res) =>{

                        console.log(res)

                });


  }

}

function mapDispatchToProps(dispatch){

    return {
      update: (dispatchType,dispatchPayload) => {


           action = { payload: dispatchPayload,type: dispatchType}

        dispatch(action);
      }
    };
}
function mapstatetoprops(state){
    return{

        Userdetails:state.Userdetails
    }
}


export default connect(mapstatetoprops,mapDispatchToProps)(Home)
