import React, { useEffect, useState, useRef } from "react";
import { DieContainer, Dot } from "./Die.styled";

const Die = ({ buttonPressed, diceSelected }) => {
	const [dice, setDice] = useState(0);
	const initialRender = useRef(false);

	const randomizer = () => {
		// generates a random number for a die, saves it in local storage with the other random numbers from other dices. Also checks that the landing face is never repeated.
		const randomNum = Math.floor(Math.random() * 6 + 1);
		setDice((dice) => {
			let singlePlayerArr = [];
			singlePlayerArr = JSON.parse(localStorage.getItem("singlePlayer")) || [];
			if (diceSelected === singlePlayerArr.length - 1) {
				localStorage.clear();
			}
			if (dice === randomNum) {
				if (randomNum === 6) {
					singlePlayerArr.push(randomNum - 1);
					localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
					return randomNum - 1;
				} else {
					singlePlayerArr.push(randomNum + 1);
					localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
					return randomNum + 1;
				}
			} else {
				singlePlayerArr.push(randomNum);
				localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
				return randomNum;
			}
		});
	};

	useEffect(() => {
		// the initialRender ref prevents useEffect from running on load.
		if (initialRender.current) {
			randomizer();
		} else {
			initialRender.current = true;
			localStorage.clear();
		}
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
