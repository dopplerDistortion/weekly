type HUE = number;
type SATURATION = `${number}%`;
type LIGHTNESS = `${number}%`;

type THSL = `hsl(${HUE} ${SATURATION} ${LIGHTNESS})`;

type TTheme = {
	background: THSL;
	foreground: THSL;
	card: THSL;
	cardForeground: THSL;
	popover: THSL;
	popoverForeground: THSL;
	primary: THSL;
	primaryForeground: THSL;
	secondary: THSL;
	secondaryForeground: THSL;
	muted: THSL;
	mutedForeground: THSL;
	accent: THSL;
	accentForeground: THSL;
	destructive: THSL;
	destructiveForeground: THSL;
	border: THSL;
	input: THSL;
	ring: THSL;
};

export type { TTheme, THSL };
