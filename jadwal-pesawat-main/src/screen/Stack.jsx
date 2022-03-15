import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './Detail';
import Home from './Home';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home1"}
            screenOptions={{
                headerShown: true,
                headerTitleAlign:'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#88b454',
                },
            }}
        >
            <Stack.Screen
                name="Home1"
                component={Home}
                options={{
                    title: "HEALLING.ID",
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
            />  

        </Stack.Navigator>
    );
};

export default ScreenStack;