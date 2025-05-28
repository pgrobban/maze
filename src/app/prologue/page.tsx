"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Prologue() {
	const router = useRouter();

	return (
		<Box>
			<Typography variant="h2" mb={2}>
				Prologue
			</Typography>
			<Typography variant="body1" className="drop-cap">
				The Maze. I met them at the gate though I usually wait inside.
				Preoccupied with their own thoughts, impatient, like so many children,
				they didn’t see who I really was. They never noticed my crown, my pain,
				the fire in my eyes.
			</Typography>
			<Typography>
				Like all the others they think the Maze was made for them; actually, it
				is the other way around. They think I am some poet who will lead them
				through the symbols and spaces of this Underworld. They think I will
				teach them lessons. They should call me Cerberus, ... I am the lesson.
			</Typography>
			<br />
			<Typography>
				The monstrous walls rise up and run away as far as the human eye can
				see, circling and dividing. Which half is the Maze?
			</Typography>
			<Typography>
				Even I get lost. It changes-sometimes slowly, imperceptibly ...
				sometimes suddenly. This House is not only made of stone and mortar,
				wood and paint; it is made of time and mystery, hope and fear.
				Construction never stops. I take some pride in my role as architect.
			</Typography>
			<br />
			<Typography>
				They think I will guide them to the center. Perhaps I will...
			</Typography>
			<Typography>The sun was very hot.</Typography>
			<Typography>
				Together we walked through the gate into... the entrance hall of the
				Maze.
			</Typography>
			<Typography>
				They looked carefully at the bronze doors, trying to choose. The
				uncertainty of visitors is one of my little pleasures.
			</Typography>
			<Typography>
				"It's easy to get lost," I said helpfully. "This can be a sinister
				place." The sun glared at me through the gateway.
			</Typography>
			<Typography>
				Something was ringing behind one of the doors. They spent some time
				trying to decide which door it was, not understanding that the silences
				of the Maze are as eloquent as the sounds.
			</Typography>
			<Typography>
				"Decisions, decisions," one said. "Too many decisions."
			</Typography>
			<Typography>"The story of my life," said another.</Typography>
			<Typography>
				"We don't want to be late," said a third, opening one of the doors.
			</Typography>
			<Typography>
				"Nary a soul to be seen," said the first, peering into the gloom.
			</Typography>
			<Typography>
				I waited patiently for them to choose which way to go... into...
			</Typography>
		</Box>
	);
}
