import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };  

  gotoResetPassword = () => {
    this.props.navigation.navigate('ResetPassword');
  }
  gotoRegister = async () => {
    this.props.navigation.navigate('Register');
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <View style={styles.container}>
      <Icon name="unlock" size={50} color="#fff" />
      <View style={styles.loginlabel}>
        <Text style={{fontSize: 20, color:"#B5882D"}} >SIGN IN</Text>
      </View>
      <Input
        inputContainerStyle={styles.TextInputStyle}
        inputStyle={{fontSize:16}}
        placeholder='INPUT PHONE NUMBER'
        leftIcon={
          <Icon
            name='phone'
            size={18}
            color='black'
            style={{marginRight:10}}
          />
        }
      />
      <Input
        secureTextEntry={true}
        inputContainerStyle={styles.TextInputStyle}
        inputStyle={{fontSize:16}}
        placeholder='INPUT PASSWORD'
        leftIcon={
          <Icon
            name='key'
            size={18}
            color='black'
            style={styles.iconinputtext}
          />
        }
      />
      <Button
        buttonStyle={{marginHorizontal:10, backgroundColor:'#008073', height:50}}
        containerStyle={{ width:'100%' }}
        title="LOGIN"
        onPress={this._signInAsync}
      />
      <View style={styles.labellink}>
        <TouchableOpacity onPress={this.gotoRegister} style={{marginBottom:20}}>
          <Text style={{color: "#fff"}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoResetPassword}>
          <Text style={{color: "#fff"}}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002E27',
    alignItems:"center",
    justifyContent:"center",
    width:'100%'
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
  labellink:{
    marginTop:30, 
    alignContent:"center", 
    alignItems:"center"
  },
  iconinputtext:{
    marginRight:10
  },
  fullWidthButton: {
    backgroundColor: '#008073',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    borderRadius:4,
  },
  fullWidthButtonText: {
    fontSize:17,
    color: 'white'
  }
});

export default SignInScreen;
