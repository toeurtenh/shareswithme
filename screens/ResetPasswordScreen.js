
import React from 'react';
import { ScrollView, StyleSheet, Text, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';

class ResetPasswordScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="external-link-alt" size={50} color="#fff" />
        <View style={styles.loginlabel}>
          <Text style={{fontSize: 20, color:"#B5882D"}} >RESET PASSWORD</Text>
        </View>
    
        <Input
          inputContainerStyle={styles.TextInputStyle}
          inputStyle={styles.inputStyle}
          placeholder='INPUT EMAIL'
        />

        <Button
          buttonStyle={{marginHorizontal:10, backgroundColor:'#008073', height:50}}
          containerStyle={{ width:'100%' }}
          title="SEND LINK"
        />
        
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

export default ResetPasswordScreen;
