import React, { useEffect, useState, useContext } from "react";
import Dice from "../../components/Dice/Dice";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { Container, LeftSide, RightSide } from "./SinglePlayer.styled";

const SinglePlayer = () => {
	const [numberOfDice, setNumberOfDice] = useState(1);
	const [isRollPressed, setIsRollPressed] = useState(false);
	// const [rolled, setRolled] = useState("");
	const { pushToArr } = useContext(HistoryContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setNumberOfDice(Number(e.target.numOfDice.value));
	};

	const handleClick = () => {
		const currentLS = JSON.parse(localStorage.getItem("singlePlayer"));
		if (currentLS === null) {
			setIsRollPressed(!isRollPressed);
		} else if (currentLS.length === numberOfDice) {
			localStorage.clear();
			setIsRollPressed(!isRollPressed);
		} else {
			setIsRollPressed(!isRollPressed);
		}
	};

	useEffect(() => {
		pushToArr(JSON.parse(localStorage.getItem("singlePlayer")));
	}, [isRollPressed]);

	return (
		<Container>
			{/* <h1>Let's test your luck!</h1>
			<h2>
				If you want to know some fun facts about the relation between luck and
				what you just rolled choose the 2 dice option, you can also pick up to
				10 dice to roll at the same time though!
			</h2> */}
			<LeftSide>
				<Form submit={handleSubmit} />
				<Dice
					numberOfDice={numberOfDice}
					isRollPressed={isRollPressed}
					handleClick={handleClick}
				/>
			</LeftSide>
			<RightSide>
				<Table />
			</RightSide>
		</Container>
	);
};

export default SinglePlayer;
