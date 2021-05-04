import React, { useEffect, useState } from "react";
import { DieContainer, Dot } from "./Die.styled";

const Die = ({ buttonPressed }) => {
	const [dice, setDice] = useState(0);

	const randomizer = () => {
		const randomNum = Math.floor(Math.random() * 6 + 1);
		console.log(randomNum);
		setDice((dice) => {
			if (dice === randomNum) {
				if (randomNum === 6) {
					return randomNum - 1;
				} else {
					return randomNum + 1;
				}
			} else {
				return randomNum;
			}
		});
	};

	useEffect(() => {
		randomizer();
	}, [buttonPressed]);

	return (
		<DieContainer>
			{[...Array(dice).keys()]
				.map((x) => x + 1)
				.map((element) => (
					<Dot key={element} />
				))}
		</DieContainer>
	);
};

export default Die;
