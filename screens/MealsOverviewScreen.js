import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummyData';

export default function MealsOverviewScreen() {
	return (
		<View style={styles.container}>
			<Text>Meals Overview Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});