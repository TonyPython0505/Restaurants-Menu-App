import {View, Text, StyleSheet} from 'react-native';

export default function MealDetails({duration, complexity, affordability, textStyle}) {
	<View style={styles.details}>
		<Text style={[styles.detailItem, textAlign]}>{duration}</Text>
		<Text style={[styles.detailItem, textAlign]}>{complexity.toUpperCase()}</Text>
		<Text style={[styles.detailItem, textAlign]}>{affordability.toUpperCase()}</Text>
	</View>
}

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},

	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});