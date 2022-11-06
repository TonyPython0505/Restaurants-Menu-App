import { FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummyData'

import CategoryGridTile from '../components/CategoryGridTile.js';


export default function CategoriesScreen(props) {
	function renderCategoryItem(itemDataObject) {
		function pressHandler() {
			props.navigation.navigate("MealsOverview", {
				categoryId: itemDataObject.item.id,
				title: itemDataObject.item.title,
			});
		}
	
		return (
			<CategoryGridTile title={itemDataObject.item.title} color={itemDataObject.item.color} onPress={pressHandler}/>
		);
	}

	return (
		<FlatList data={CATEGORIES} 
		keyExtractor={(item) => item.id}
		renderItem={renderCategoryItem}
		numColumns={2}
		/>
	);
}