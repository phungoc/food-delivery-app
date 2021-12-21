import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {AuthLayout} from '..';
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from '../../components';
import {FONTS, SIZES, COLORS, icons} from '../../constants';
import {utils} from '../../utils';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnableSignUp = () => {
    return (
      email !== '' &&
      password !== '' &&
      emailError === '' &&
      passwordError === ''
    );
  };

  return (
    <AuthLayout
      title={'Getting Started'}
      subtitle={'Create an account to continue!'}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}>
        {/* Form inputs */}
        <FormInput
          label={'Email'}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            // validate email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ''
                      ? COLORS.gray
                      : email !== '' && emailError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label={'Username'}
          autoCompleteType="username"
          autoCapitalize="words"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            // validate username
            utils.validateUserName(value, setUserNameError);
            setUserName(value);
          }}
          errorMsg={userNameError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  userName === '' || (userName !== '' && userNameError === '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    userName === ''
                      ? COLORS.gray
                      : userName !== '' && userNameError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: 40,
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}
              />
            </TouchableOpacity>
          }
        />

        {/* Sign Up */}
        <TextButton
          label={'Sign Up'}
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate('Otp')}
        />

        {/* Sign In */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Already have an account?
          </Text>

          <TextButton
            label={'Sign In'}
            buttonContainerStyle={{marginLeft: 3, backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        {/* Facebook */}
        <TextIconButton
          label={'Continue With Facebook'}
          labelStyle={{marginLeft: SIZES.radius, color: COLORS.white}}
          containerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconStyle={{tintColor: COLORS.white}}
        />

        {/* Google */}
        <TextIconButton
          label={'Continue With Google'}
          labelStyle={{marginLeft: SIZES.radius, color: COLORS.black}}
          containerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconStyle={{tintColor: null}}
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
