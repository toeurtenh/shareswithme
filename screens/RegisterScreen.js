import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };  

  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="registered" size={50} color="#fff" />
        <View style={styles.loginlabel}>
          <Text style={{fontSize: 20, color:"#B5882D"}} >JOIN US</Text>
        </View>
        <Input
          inputContainerStyle={styles.TextInputStyle}
          inputStyle={styles.inputStyle}
          placeholder='INPUT PHONE NUMBER'
        />
          <Input
          inputContainerStyle={styles.TextInputStyle}
          inputStyle={styles.inputStyle}
          placeholder='INPUT EMAIL'
        />
          <Input
          secureTextEntry={true}
          inputContainerStyle={styles.TextInputStyle}
          inputStyle={styles.inputStyle}
          placeholder='INPUT PASSWORD'
        />
        <Button
          buttonStyle={{marginHorizontal:10, backgroundColor:'#008073', height:50}}
          containerStyle={{ width:'100%' }}
          title="REGISTER"
        />
      
        <TouchableOpacity onPress={this.gotoLogin} style={{marginTop:30}}>
          <Text style={{color: "#fff"}}>Sign In</Text>
        </TouchableOpacity>
      
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002E27',
    alignItems:"center",
    justifyContent:"center"
  },
  loginlabel:{
    marginTop: 10, 
    marginBottom:30
  },
  TextInputStyle:{
    borderColor: '#fff',
    borderWidth: 1, 
    borderRadius:4, 
    backgroundColor:'#fff',
    paddingVertical:5, 
    marginBottom:10,
  },
  inputStyle:{
    fontSize:16, 
    paddingHorizontal:5
  }
});

export default RegisterScreen;
