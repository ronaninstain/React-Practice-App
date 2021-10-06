import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor:'#1f65ff',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor:'#d02860',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{ 
      headerStyle:{
       backgroundColor: '#009387'
     },
     headerTintColor: '#fff',
     headerTitleStyle:{
       fontWeight: 'bold'
     }
    }}>
     <HomeStack.Screen name="Home" component={HomeScreen} options = {{ title: 'Overview' }} />
   </HomeStack.Navigator>
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{ 
      headerStyle:{
       backgroundColor: '#1f65ff'
     },
     headerTintColor: '#fff',
     headerTitleStyle:{
       fontWeight: 'bold'
     }
    }}>
     <DetailsStack.Screen name="Details" component={DetailsScreen} options = {{ }} />
   </DetailsStack.Navigator>
  );