import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, Pressable, Text, Image, Platform} from 'react-native';

import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();
// const DrawerComponent = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="BUDDYCOIN"
//       drawerType="front"
//       drawerPosition="right"
//       drawerContent={(props) => <SideDrawer {...props} />}>
//       <Drawer.Screen name="BUDDYCOIN" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

// stack reset
// const resetAction = CommonActions.reset({
//   index: 0,
//   routes: [{name: 'BUDDYCOIN'}],
// });

// 닫기버튼
// const CloseBtn = () => {
//   const navigation = useNavigation();
//   return (
//     <Pressable
//       style={{flexDirection: 'row', paddingRight: 20}}
//       onPress={() => {
//         navigation.dispatch(resetAction);
//       }}>
//       <Image
//         source={{
//           uri:
//             'https://buddycoin-app.s3.ap-northeast-2.amazonaws.com/common/closeBtn.png',
//         }}
//         style={{width: 20, height: 20}}
//         resizeMode="contain"
//       />
//     </Pressable>
//   );
// };

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   navigationRef.current?.navigate(name, params);
// }

const RootNavigation = (name, params) => {
  //   const store = useSelector((state) => state, shallowEqual);
  //   // console.log(store);
  //   const dispatch = useDispatch();
  //   var ASLanguage = '';
  //   AsyncStorage.getItem('language')
  //     .then((value) => {
  //       if (value != null) {
  //         ASLanguage = value;
  //       } else {
  //         ASLanguage = 'kr';
  //         AsyncStorage.setItem('language', 'kr');
  //       }
  //     })
  //     .then(() => {
  //       dispatch(ActionCreator.setLanguage(ASLanguage));
  //     });
  //   const idCardIs = store?.auth?.idCardImgUrl ? true : false;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#101010',
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        borderBottomWidth: 0,
        headerTintColor: '#ffb233',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,

        ...Platform.select({
          ios: {
            headerLeftContainerStyle: {marginHorizontal: 20},
          },
        }),
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
