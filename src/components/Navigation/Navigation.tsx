import * as React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QuestionPage } from '../../screens/QuestionPage';
import { Login } from '../../screens/Login';
import { Register } from '../../screens/Register';
import { HelpPage } from '../../screens/HelpPage';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Question Page" component={QuestionPage} />
                <Stack.Screen name="HelpPage" component={HelpPage} />
            </Stack.Navigator>

    )
}

export default Navigation;