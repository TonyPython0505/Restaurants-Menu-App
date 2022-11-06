import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', sceneContainerStyle: {backgroundColor: 'black'}}}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title: 'All Categories'}} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="dark"/>
    <FavoritesContextProvider>
      <NavigationContainer screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: {backgroundColor: 'black'}}}>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{title: 'All Categories', headerShown: false}}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          // options={({route, navigation}) => {
          //   return {title: route.params.title}}}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title: 'About The Meal'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
