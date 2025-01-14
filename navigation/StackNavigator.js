import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AttendanceSheetScreen from '../components/attendence/screens/AttendanceSheetScreen';
import Register from '../components/auth/screens/Register';
import SignIn from '../components/auth/screens/SignIn';
import CheckInScreen from '../components/home/screens/CheckInScreen';
import CheckOutScreen from '../components/home/screens/CheckOutScreen';
import HomeScreen from '../components/home/screens/HomeScreen';
import EditProfile from '../components/users/screens/EditProfile';
import UserProfile from '../components/users/screens/UserProfile';

// Create the Stack Navigator
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="SignIn" // Set SignIn as the initial route
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#4CAF50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            {/* Sign In Screen */}
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }} // Ẩn header cho màn hình SignIn
            />

            {/* Register Screen */}
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register',
                }}
            />

            {/* Home Screen with custom header */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    title: 'Home', // Customize the default title
                })}
            />

            {/* Check In Screen */}
            <Stack.Screen
                name="CheckIn"
                component={CheckInScreen}
                options={{
                    title: 'Check In',
                }}
            />

            {/* Check Out Screen */}
            <Stack.Screen
                name="CheckOut"
                component={CheckOutScreen}
                options={{
                    title: 'Check Out',
                }}
            />

            {/* User Profile Screen */}
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                    title: 'User Profile', // Customize the title
                }}
            />

            <Stack.Screen
                name="AttendanceSheetScreen"
                component={AttendanceSheetScreen}
                options={{
                    title: 'Attendance Sheet', // Customize the title
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    title: 'Edit Profile', // Customize the title
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
