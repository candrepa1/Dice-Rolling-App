import React from "react";
import { FormContainer, Select, Submit } from "./Form.styled";

const Form = ({ submit }) => {
	// user chooses the number of dice they want to roll.
	const arr = [...Array(10).keys()].map((x) => x + 1);
	return (
		<FormContainer onSubmit={(e) => submit(e)}>
			<label>
				Dice to be rolled:
				<Select name="numOfDice">
					{arr.map((element) => (
						<option key={element} value={element}>
							{element}
						</option>
					))}
				</Select>
			</label>
			<Submit type="submit">Apply</Submit>
		</FormContainer>
	);
};

export default Form;
