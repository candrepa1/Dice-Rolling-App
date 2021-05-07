import React, { useEffect, useState } from "react";
import Die from "../Die/Die";
import { DiceContainer, Button, Div, Total } from "./Dice.styled";

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
					if (currentLS[0] === currentLS[1]) {
						setTotal(`You rolled a ${result}, DOUBLE!!!`);
					} else {
						setTotal(`You rolled a ${result}`);
					}
				} else {
					setTotal(`You rolled a ${result}`);
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
			<Div>
				<Button data-testid="roll-button" onClick={() => handleClick()}>
					ROLL TIME 🎲
				</Button>
				<Total>{total}</Total>
			</Div>
		</>
	);
};

export default Dice;
