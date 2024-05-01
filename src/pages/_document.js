import { ThemeModeScript } from "flowbite-react";
import { Html, Head, Main, NextScript } from "next/document";

import { FooterComponent } from "./layout/Footer";

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
