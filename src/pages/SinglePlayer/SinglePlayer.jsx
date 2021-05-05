import React, { useEffect, useState, useContext } from "react";
import Dice from "../../components/Dice/Dice";
import Facts from "../../components/Facts/Facts";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import {
	Container,
	LeftSide,
	RightSide,
	TopContainer,
	BottomContainer,
	PlayAgain,
	FactsContainer,
} from "./SinglePlayer.styled";

const SinglePlayer = () => {
	const [numberOfDice, setNumberOfDice] = useState(1);
	const [isRollPressed, setIsRollPressed] = useState(false);
	// const [rolled, setRolled] = useState("");
	const { pushToArr, rolledArr } = useContext(HistoryContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setNumberOfDice(Number(e.target.numOfDice.value));
	};

	const handleClick = () => {
		// const currentLS = JSON.parse(localStorage.getItem("singlePlayer"));
		// if (currentLS === null) {
		// 	setIsRollPressed(!isRollPressed);
		// } else if (currentLS.length === numberOfDice) {
		// 	localStorage.clear();
		// 	setIsRollPressed(!isRollPressed);
		// } else {
		setIsRollPressed(!isRollPressed);
		// }
	};

	useEffect(() => {
		pushToArr(JSON.parse(localStorage.getItem("singlePlayer")));
		localStorage.clear();
	}, [isRollPressed]);

	return (
		<Container>
			<TopContainer>
				<h1>You have 10 turns to roll the dice, </h1>
				<h2>after that I will show you your stats 🍀</h2>
			</TopContainer>
			<BottomContainer>
				<LeftSide>
					{rolledArr.length === 10 ? (
						// <FactsContainer>
						<>
							<Facts />
							<PlayAgain onClick={() => pushToArr(false)}>Play Again</PlayAgain>
						</>
					) : (
						// </FactsContainer>
						<>
							<Form submit={handleSubmit} />
							<Dice
								numberOfDice={numberOfDice}
								isRollPressed={isRollPressed}
								handleClick={handleClick}
							/>
						</>
					)}
				</LeftSide>
				<RightSide>
					<Table />
				</RightSide>
			</BottomContainer>
		</Container>
	);
};

export default SinglePlayer;
