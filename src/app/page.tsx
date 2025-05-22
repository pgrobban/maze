"use client";
import Image from "next/image";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Image src="/images/cover.jpg" alt="Logo" width={700} height={563} />
			<Grid mt={4} container spacing={4} direction="column" alignItems="center">
				<Grid size={12}>
					<Button fullWidth onClick={() => router.push("/create")}>
						<Typography>Instructions</Typography>
					</Button>
				</Grid>
				<Grid size={12}>
					<Button fullWidth onClick={() => router.push("/join")}>
						<Typography>Read the prologue text</Typography>
					</Button>
				</Grid>
				<Grid size={12}>
					<Button
						sx={{
							boxShadow: "0 0 10px rgba(173, 216, 230, 0.6)",
							textShadow: "0 0 4px #fff",
						}}
					>
						<Typography variant="button">ENTER THE MAZE</Typography>
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
