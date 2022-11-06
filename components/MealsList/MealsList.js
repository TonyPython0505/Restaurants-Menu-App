import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

export default function MealsList({items}) {
	function renderMealItem(itemDataObject) {
		const mealProps = {
			id: itemDataObject.item.id,
			title: itemDataObject.item.title,
			imageURL: itemDataObject.item.imageUrl,
			affordability: itemDataObject.item.affordability,
			complexity: itemDataObject.item.complexity,
			duration: itemDataObject.item.duration,
		};

		return (
			<MealItem {...mealProps}/>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList data={items}
			keyExtractor={(meal) => meal.id}
			renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});