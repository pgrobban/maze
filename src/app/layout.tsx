import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
	title: "Maze",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box margin={"0 auto"} width={1000} height={900}>
						<Box mt={4}>{children}</Box>
						<Box position={"fixed"} right={30} bottom={20}>
							&copy; Original book text and illustrations by Christopher Manson
							<br />
							&copy; website by pgrobban
						</Box>
					</Box>
				</ThemeProvider>
			</body>
		</html>
	);
}
