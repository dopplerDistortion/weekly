import Entry from "@/app";
import { ThemeContext } from "@/theme/theme";

export default function App() {
	return (
		<ThemeContext>
			<Entry />
		</ThemeContext>
	);
}
