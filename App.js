import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBord from './src/components/OnBoard'
import Home from './src/components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
      <NavigationContainer>
        {/* {showOnboard && <OnBord handleDone={handleOnboardFinish} />}
        {!showOnboard && <Home />} */}
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
