"use client";
import Image from "next/image";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Image src="/images/cover.jpg" alt="Logo" width={700} height={563} />
			<Stack
				mt={4}
				spacing={4}
				width={400}
				direction="column"
				alignItems="center"
			>
				<Button fullWidth onClick={() => router.push("/instructions")}>
					<Typography>Instructions</Typography>
				</Button>
				<Button fullWidth onClick={() => router.push("/join")}>
					<Typography>Read the prologue text</Typography>
				</Button>
				<Button
					sx={{
						boxShadow: "0 0 10px rgba(173, 216, 230, 0.6)",
						textShadow: "0 0 4px #fff",
					}}
				>
					<Typography variant="button">ENTER THE MAZE</Typography>
				</Button>
			</Stack>
		</Box>
	);
}
