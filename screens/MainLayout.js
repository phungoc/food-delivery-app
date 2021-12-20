import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {setSelectedTab} from '../stores/tab/tabActions';
import {COLORS, SIZES, FONTS, icons, constants, dummyData} from '../constants';

import {Header} from '../components';
import {Home, Search, CartTab, Favorite, Notification} from '../screens';

const TabButton = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {flex: 1, alignItems: 'center', justifyContent: 'center'},
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  const flatListRef = useRef();
  // Reanimated Shared Value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favoriteTabFlex = useSharedValue(1);
  const favoriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Animated Style
  const homeFlexStyle = useAnimatedStyle(() => {
    return {flex: homeTabFlex.value};
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: homeTabColor.value};
  });
  const searchFlexStyle = useAnimatedStyle(() => {
    return {flex: searchTabFlex.value};
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: searchTabColor.value};
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return {flex: cartTabFlex.value};
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: cartTabColor.value};
  });
  const favoriteFlexStyle = useAnimatedStyle(() => {
    return {flex: favoriteTabFlex.value};
  });
  const favoriteColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: favoriteTabColor.value};
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {flex: notificationTabFlex.value};
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: notificationTabColor.value};
  });

  // useEffect
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);
  useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, {duration: 400});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 400});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 400});
      homeTabColor.value = withTiming(COLORS.white, {duration: 400});
    }
    if (selectedTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, {duration: 400});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 400});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 400});
      searchTabColor.value = withTiming(COLORS.white, {duration: 400});
    }
    if (selectedTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = withTiming(4, {duration: 400});
      cartTabColor.value = withTiming(COLORS.primary, {duration: 400});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 400});
      cartTabColor.value = withTiming(COLORS.white, {duration: 400});
    }
    if (selectedTab === constants.screens.favorite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favoriteTabFlex.value = withTiming(4, {duration: 400});
      favoriteTabColor.value = withTiming(COLORS.primary, {duration: 400});
    } else {
      favoriteTabFlex.value = withTiming(1, {duration: 400});
      favoriteTabColor.value = withTiming(COLORS.white, {duration: 400});
    }
    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, {duration: 400});
      notificationTabColor.value = withTiming(COLORS.primary, {duration: 400});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 400});
      notificationTabColor.value = withTiming(COLORS.white, {duration: 400});
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}>
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={dummyData.myProfile?.profile_image}
              style={{width: 40, height: 40, borderRadius: SIZES.radius}}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.cart && <CartTab />}
                {item.label == constants.screens.favorite && <Favorite />}
                {item.label == constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Footer */}
      <View style={{height: 100, justifyContent: 'flex-end'}}>
        {/* Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.favorite}
            icon={icons.favorite}
            isFocused={selectedTab == constants.screens.favorite}
            outerContainerStyle={favoriteFlexStyle}
            innerContainerStyle={favoriteColorStyle}
            onPress={() => setSelectedTab(constants.screens.favorite)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
