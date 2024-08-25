import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { initializeApplication } from "./source/database/database";

const Stack = createStackNavigator();

import RegistrationScreen from "./source/onboarding/Register";
import ActiveQueuesScreen from "./source/screens/ActiveQueues";
import CreateQueueScreen from "./source/screens/CreateQueue";
import SuccessQueueScreen from "./source/screens/SuccessQueue";

export default function App() {
  initializeApplication();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SuccessQueueScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="CreateQueueScreen" component={CreateQueueScreen} />
        <Stack.Screen
          name="SuccessQueueScreen"
          component={SuccessQueueScreen}
        />
        <Stack.Screen
          name="ActiveQueuesScreen"
          component={ActiveQueuesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
