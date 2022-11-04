# Restaurants-Menu-App!
Learnt about:
- screens navigation with createNavigateStackNavigator imported from '@react-navigation/native-stack'
- NavigationContainer imported from '@react-navigation/native', Stack.Navigator and Stack.Screen
- set the prop initialRouteName to set the initial screen of the app
- props.navigation.navigate(<screen name>, param object)
- props.route.params.<key name> to extract items from param object sent in props.navigation.navigate()
- useNavigation hook to replace the navigation prop which can be used in unregistered screens
- useRoute hook to replace props.route which can be used in unregistered screens
- adding images from the web with <Image source={{uri: imageURL}} />
- change style on press
- options in Stack.Screen: title, headerStyle, headerTintColor (header text color)
- screenOptions in Stack.Navigator
- navigation.setOptons() to be used in useLayoutEffect hook
- use array's map method to display a list of JSX components
- set header text or icon with navigation.setOptions({headerRight: <JSX component>, headerLeft: <JSX component>})
