import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageContainerProps } from "./types";

export default function PageContainer(props: PageContainerProps) {
	return (
		<View style={{ flex: 1, backgroundColor: "red" }}>
			<SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "red" }}>
				<StatusBar style="auto" />
				<View style={{ flex: 1, backgroundColor: "blue" }} {...props} />
			</SafeAreaView>
		</View>
	);
}
