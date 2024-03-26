import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {goBack, navigate} from '../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../common/constants/navScreenTags';
import {TextInput} from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        //@ts-ignore
        setName(value);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async (): Promise<void> => {
    if (name === '' || name === undefined || name === null) {
      Alert.alert('Warining!', 'Please write your name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success!', 'Your data has been updated');
      } catch (err) {
        console.log(err);
      }
    }
  };
  const removeData = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('UserName');
      console.log(`-----called`);

      goBack();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeTxt}>Welcome {name}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={updateData}>
        <Text style={styles.loginBtnTxt}>Updata Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginBtn, {backgroundColor: 'red'}]}
        onPress={removeData}>
        <Text style={styles.loginBtnTxt}>Clear Data</Text>
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
  homeContainer: {
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
  welcomeTxt: {
    fontSize: 22,
    marginBottom: 22,
  },
});
export default HomeScreen;
