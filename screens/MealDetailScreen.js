import { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummyData';
import { FavoritesContext } from '../store/context/favorites-context';

export default function MealDetailScreen({route, navigation}) {
	const favoriteMealsContext = useContext(FavoritesContext);

	const mealId = route.params.mealId;
	const meal = MEALS.find((meal) => {return meal.id === mealId});

	const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

	function changeFavoriteStatusHandler() {
		if (mealIsFavorite) {
			favoriteMealsContext.removeFavorite(mealId);
		}
		else {
			favoriteMealsContext.addFavorite(mealId);
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (<IconButton icon={mealIsFavorite? "star" : "start-outline"} color="white" onPressHandler={changeFavoriteStatusHandler}/>)
		});
	}, [mealId, navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image style={styles.image} source={{uri: meal.imageUrl}}/>
			<Text>{meal.title}</Text>
			<MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} style={{color: 'white'}}/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={meal.ingredients}/>
					<Subtitle>Steps</Subtitle>
					<List data={meal.steps}/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 30,
	},

	image: {
		width: '100%',
		height: 350,
	},

	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},

	listOuterContainer: {
		alignItems: 'center',
	},

	listContainer: {
		width: '80%',

	},
});