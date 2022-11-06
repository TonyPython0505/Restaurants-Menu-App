import { useLayoutEffect } from 'react';
// import { useRoute } from '@react-navigation/native';


import { CATEGORIES, MEALS } from '../data/dummyData';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({route}) {
	//const route = useRoute();
	//const catId = route.params.categoryId;
	const catId = route.params.categoryId;
	const meals = MEALS.filter((meal) => {return meal.categoryIds.includes(catId);});
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => {return category.id === catId}).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	return <MealsList items={meals}/>
}