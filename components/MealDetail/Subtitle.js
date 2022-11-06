import { View, Text, StyleSheet } from 'react-native';

export default function Subtitle({children}) {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},

	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: 'white',
		bottomWidth: 2,
	},
});