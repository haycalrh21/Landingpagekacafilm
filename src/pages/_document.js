import { ThemeModeScript } from "flowbite-react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<ThemeModeScript />

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
