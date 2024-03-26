import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  navigate,
  navigateToAnotherStack,
  replace,
} from '../../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../../common/constants/navScreenTags';
const LoginScreen = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        console.log(`value>>> ${JSON.stringify(value)}`);

        if (value !== null) {
          navigate(NavScreenTags.HOME_STACK);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (): Promise<void> => {
    if (userName === '' || userName === undefined || userName === null) {
      Alert.alert('Warining!', 'Please write your name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', userName);
        navigate(NavScreenTags.HOME_STACK, {
          name: userName,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={txt => setUserName(txt)}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnTxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    marginTop: 22,
    backgroundColor: 'teal',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 6,
  },
  loginBtnTxt: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
