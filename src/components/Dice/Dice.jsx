import React, { useState } from "react";
import Die from "../Die/Die";

const Dice = ({ numberOfDice }) => {
	const [isRollPressed, setIsRollPressed] = useState(false);

	const handleClick = () => setIsRollPressed(!isRollPressed);

	return (
		<>
			{[...Array(numberOfDice).keys()]
				.map((x) => x + 1)
				.map((element) => (
					<Die key={element} buttonPressed={isRollPressed} />
				))}
			<button onClick={handleClick}>Roll your dice</button>
		</>
	);
};

export default Dice;
