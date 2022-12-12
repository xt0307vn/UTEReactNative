import { SafeAreaView, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constant from './src/controllers/constant';
import FlatListScreen from './src/components/flatListScreen/FlatListScreen';
import DetailUser from './src/components/flatListScreen/detailUser'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name={Constant.screenName.FlatListScreen} component={FlatListScreen} options={{
          title: "Danh sách"
        }}/>
        <Stack.Screen name={Constant.screenName.DetailUser} component={DetailUser} options={{
          headerShown: true,
          title: "Chi tiết"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
