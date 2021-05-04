import React, { useState } from "react";
import Dice from "../../components/Dice/Dice";
import Form from "../../components/Form/Form";
import { Container } from "./SinglePlayer.styled";

const SinglePlayer = () => {
	const [numberOfDice, setNumberOfDice] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		setNumberOfDice(Number(e.target.numOfDice.value));
	};

	return (
		<Container>
			<Form submit={handleSubmit} />
			<Dice numberOfDice={numberOfDice} />
		</Container>
	);
};

export default SinglePlayer;
