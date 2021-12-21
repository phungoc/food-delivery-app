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

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  const isEnableSignIn = () => {
    return email !== '' && password !== '' && emailError === '';
  };

  return (
    <AuthLayout
      title={"Let's Sign You In"}
      subtitle={"Welcome back, you're been missed"}>
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
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            setPassword(value);
          }}
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

        {/* Save me & Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.radius,
          }}>
          <CustomSwitch value={saveMe} onChange={() => setSaveMe(!saveMe)} />

          <TextButton
            label={'Forgot Password?'}
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.gray, ...FONTS.body4}}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        {/* Sign In */}
        <TextButton
          label={'Sign In'}
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
        />

        {/* Sign Up */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Don't have an account?
          </Text>

          <TextButton
            label={'Sign Up'}
            buttonContainerStyle={{marginLeft: 3, backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.navigate('SignUp')}
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

export default SignIn;
