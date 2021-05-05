import React, { useEffect, useState } from "react";
import Die from "../Die/Die";
import { DiceContainer, Button } from "./Dice.styled";

const Dice = ({ numberOfDice, isRollPressed, handleClick }) => {
	const [total, setTotal] = useState("");

	useEffect(() => {
		const currentLS = JSON.parse(localStorage.getItem("singlePlayer"));
		if (currentLS) {
			if (currentLS.length === numberOfDice) {
				const result = currentLS.reduce(
					(accumulator, currentValue) => accumulator + currentValue
				);
				if (currentLS.length === 2) {
					console.log("same length");
					if (currentLS[0] === currentLS[1]) {
						console.log("doubles");
						setTotal(`You rolled ${result}, DOUBLE!!!`);
					} else {
						setTotal(`You rolled ${result}`);
					}
				} else {
					setTotal(`You rolled ${result}`);
				}
			}
		}
	}, [isRollPressed, numberOfDice]);

	return (
		<>
			<DiceContainer>
				{[...Array(numberOfDice).keys()]
					.map((x) => x + 1)
					.map((element) => (
						<Die
							key={element}
							buttonPressed={isRollPressed}
							diceSelected={numberOfDice}
						/>
					))}
			</DiceContainer>
			<div>
				<Button onClick={() => handleClick()}>Roll your dice</Button>
				{total}
			</div>
		</>
	);
};

export default Dice;
