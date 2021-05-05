import React from "react";
import { FormContainer } from "./Form.styled";

const Form = ({ submit }) => {
	const arr = [...Array(10).keys()].map((x) => x + 1);
	return (
		<>
			<FormContainer onSubmit={(e) => submit(e)}>
				<label>
					Dice to be rolled:
					<select name="numOfDice">
						{/* <option defaultValue={0} disabled>
							0
						</option> */}
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
