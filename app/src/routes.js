import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Password } from "./pages/password";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} Name="home" />;
            }

            return <Ionicons size={size} color={color} Name="home-outline" />;
          },
        }}
      />

      <Tab.Screen
        name="Password"
        component={Password}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} Name="lock-closed" />;
            }

            return (
              <Ionicons size={size} color={color} Name="lock-closed-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
