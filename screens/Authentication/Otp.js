import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {FONTS, SIZES, COLORS} from '../../constants';
import {TextButton} from '../../components';
import {AuthLayout} from '..';

const Otp = ({navigation}) => {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to abc@xyz.com"
      titleContainerStyle={{marginTop: SIZES.padding * 2}}>
      {/* OTP inputs */}
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        <OTPInputView
          pinCount={4}
          style={{width: '100%', height: 50}}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={code => {
            console.log(code);
          }}
        />

        {/* Countdown timer */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Didn't receive code?
          </Text>

          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{marginLeft: 3, backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => console.log('Continue')}
        />

        <View style={{marginTop: SIZES.padding, alignItems: 'center'}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            By signing up, you agree to our
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.body3}}
            onPress={() => console.log('Terms')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
