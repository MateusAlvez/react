import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import {Password} from './pages/password'


const Tab = createBottomTabNavigator();


export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Password" component={Password} />
    </Tab.Navigator>
  )
}