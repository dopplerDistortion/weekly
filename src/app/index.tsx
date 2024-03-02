import PageContainer from "@/components/page-container";
import { StyleSheet, Text, View } from "react-native";
export { ErrorBoundary } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Entry() {
	return (
		<SafeAreaProvider>
			<PageContainer>
				<View style={styles.container}>
					<Text>Open up App.js to start working on yaour app!</Text>
				</View>
			</PageContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
