import React, { useState } from "react";
import { Container } from "./App.styled";

function App() {
	const arr = [...Array(10).keys()].map((x) => x + 1);
	const [numberOfDice, setNumberOfDice] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		setNumberOfDice(Number(e.target.numOfDice.value));
	};

	return (
		<Container>
			<form
				style={{ color: "white", marginBottom: "20px" }}
				onSubmit={handleSubmit}
			>
				<label>
					Dice to be rolled:
					<select name="numOfDice">
						{arr.map((element) => (
							<option key={element} value={element}>
								{element}
							</option>
						))}
					</select>
				</label>
				<button type="submit">Submit</button>
			</form>
		</Container>
	);
}

export default App;
