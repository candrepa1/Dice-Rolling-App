import React from "react";
import { Form, Name } from "./AddPlayer.styled";

const AddPlayer = ({ handleSubmit, input, handleChange }) => {
	// receives handleSubmit, handleChange functions and the input variable from the multiplayer view, that way the logic can stay in the parent element and can be distributed through prop drilling.
	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<label>
				New Player:
				<Name type="text" value={input} onChange={(e) => handleChange(e)} />
			</label>
		</Form>
	);
};

export default AddPlayer;
