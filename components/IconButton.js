import {Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({icon, color, onPressHandler}) {
	return (
		<Pressable onPress={onPressHandler} style={({pressed}) => {pressed && styles.pressed}}>
			<Ionicons name={icon} size={24} color={color}/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});