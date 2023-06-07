import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { QuestionCreationPage } from '../../../screens/QuestionCreationPage';
import { Profile } from '../../../screens/Profile';
import { Dashboard } from '../../../screens/Feed';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <Tab.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Quest" component={QuestionCreationPage} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>

    )
}

export default Navigation;