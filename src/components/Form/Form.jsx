import React from "react";
import { FormContainer } from "./Form.styled";

const Form = ({ submit }) => {
	const arr = [...Array(10).keys()].map((x) => x + 1);
	return (
		<>
			<h1>Let's test your luck!</h1>
			<h2>
				If you want to know some fun facts about the relation between luck and
				what you just rolled choose the 2 dice option, you can also pick up to
				10 dice to roll at the same time though!
			</h2>
			<FormContainer onSubmit={(e) => submit(e)}>
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
			</FormContainer>
		</>
	);
};

export default Form;
