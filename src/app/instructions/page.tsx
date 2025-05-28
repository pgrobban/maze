"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Instructions() {
	const router = useRouter();

	return (
		<Box>
			<Typography variant="h2">Instructions</Typography>
			<Typography>
				<i>Maze: Solve the World's Most Challenging Puzzle</i> is a puzzle book
				written and illustrated by Christopher Manson, originally published in
				1985. It was released as part of a contest with a $10,000 prize.
				<br />
				This is a digital version of the book that lets you solve the puzzles in
				an interactive way. Why not try it with friends or coworkers?
			</Typography>

			<ul>
				<li>
					The Maze consists of 45 "rooms." <u>Your goal</u> is to reach the
					center—
					<strong>room 45—and then find your way back out again</strong>.
					<br />
					Each room contains doors that may lead to other rooms (but not
					necessarily back the way you came).
				</li>
				<li>
					Use the buttons below the text to navigate from room to room.{" "}
					<strong>
						Do not use your browser's back button—it will reset your game, and
						you'll have to start over.
					</strong>
				</li>
				<li>
					Anything in the text or images might be a clue. Some clues reference
					other rooms, so keep track of what you’ve discovered along the way.
				</li>
				<li>
					With clever thinking, it’s possible to reach the center and return in
					as few as sixteen steps. The game tracks your steps and will show your
					result when you exit.
				</li>
				<li>
					<strong>One room contains a hidden door.</strong> To use it, click on
					the door in the image—not the navigation buttons.
				</li>
				<li>
					Once you’ve found the shortest path through the Maze, take on an extra
					challenge: go back and solve the riddle hidden in room 45. Its answer
					is concealed somewhere along the shortest path.
				</li>
			</ul>

			<Typography>Now go... your guide awaits you.</Typography>

			<Grid container mt={2} spacing={2}>
				<Grid>
					<Button variant="outlined" onClick={() => router.push("/")}>
						Back
					</Button>
				</Grid>
				<Grid>
					<Button variant="outlined" onClick={() => router.push("/prologue")}>
						Prologue
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
