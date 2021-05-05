import React, { useEffect, useState, useRef } from "react";
import { DieContainer, Dot } from "./Die.styled";

const Die = ({ buttonPressed, diceSelected }) => {
	const [dice, setDice] = useState(0);
	const initialRender = useRef(false);

	const randomizer = () => {
		const randomNum = Math.floor(Math.random() * 6 + 1);
		console.log(randomNum);
		setDice((dice) => {
			let singlePlayerArr = [];
			singlePlayerArr = JSON.parse(localStorage.getItem("singlePlayer")) || [];
			if (diceSelected === singlePlayerArr.length - 1) {
				localStorage.clear();
				console.log({ diceSelected, singlePlayerArr: singlePlayerArr.length });
			}
			if (dice === randomNum) {
				console.log("here 1");
				if (randomNum === 6) {
					singlePlayerArr.push(randomNum - 1);
					localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
					console.log("here 2");
					return randomNum - 1;
				} else {
					singlePlayerArr.push(randomNum + 1);
					localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
					console.log("here 3");
					return randomNum + 1;
				}
			} else {
				singlePlayerArr.push(randomNum);
				localStorage.setItem("singlePlayer", JSON.stringify(singlePlayerArr));
				console.log("here 4");
				return randomNum;
			}
		});
	};

	useEffect(() => {
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
