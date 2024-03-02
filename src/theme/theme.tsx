import {
	type ThemingType,
	createTheming,
} from "@callstack/react-theme-provider";
import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import { dark, light } from "./tokens/colors";
import { TTheme } from "./tokens/colors/theme";

export const themes: { [key: string]: TTheme } = {
	default: {
		...light,
	},
	dark: {
		...dark,
	},
};

const { ThemeProvider, withTheme, useTheme }: ThemingType<TTheme> =
	createTheming(themes.default);

type ThemeContextType = {
	children: React.ReactNode;
	theme?: TTheme;
};

const ThemeContext = (props: ThemeContextType) => {
	const [theme, settheme] = useState<TTheme>(themes.default);

	useEffect(() => {
		const listener = Appearance.addChangeListener((event) => {
			if (event.colorScheme === "light") {
				settheme(themes.default);
			} else {
				settheme(themes.dark);
			}
		});
		return () => {
			listener.remove();
		};
	}, []);

	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export { ThemeContext, withTheme, useTheme };
