"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
	return (
		<Box>
			<Typography variant="h2">Instructions</Typography>
			<Typography>
				<i>Maze: Solve the World's Most Challenging Puzzle</i> is a puzzle book
				written and illustrated by Christopher Manson, published in 1985. The
				book was published as part of a contest to win $10,000.
				<br />
				This is a digital version of the book, which allows you to solve the
				puzzles in a more game-like way, so why not try it with your friends or
				coworkers?
			</Typography>
			<br />
			<Typography>
				Each page is a numbered room in the maze. Each room contains doors that
				lead to other rooms. Your challenge is to find your way from room 1
				(after the Prologue) to <strong>room 45 and then back to room 1</strong>{" "}
				using the shortest possible path.
			</Typography>
			<Typography>
				Simply click on the buttons in the room to go to a desired room. Be
				aware that once you have entered a room, you may not be able to go back
				through that room.
				<br />
				<strong>
					One of the rooms has a hidden door, which you can access by clicking
					on the correct part of the image in that room.
				</strong>
			</Typography>
			<br />
			<Typography>
				The game keeps track of how many steps you took (how many rooms you
				visited), and your result is displayed when you exit the maze after
				visiting room 1 again.
				<br />
				If you use your head, you should be able to make the journey{" "}
				<strong>in only sixteen steps</strong>.
			</Typography>
			<br />
			<Typography>
				There are any number of clues in the drawings and in the story to help
				you choose the right door in each room. Clues in a series of rooms may
				relate to one another, and may indicate a path. Other clues may refer to
				a specific door in a single room.
			</Typography>
			<Typography>
				Anything might be a clue.
				<br />
				Not all dues are necessarily trustworthy.
			</Typography>
			<br />
			<Typography>
				Once you've found the shortest path in and out of the Maze, challenge
				yourself further. Go back and find the riddle hidden in room 45.
			</Typography>
			<Typography>
				The answer to that riddle is concealed somewhere on the shortest path.
			</Typography>
			<Typography>
				Now proceed to the <Link href="/prologue">Prologue</Link>... your guide
				awaits you.
			</Typography>
		</Box>
	);
}
