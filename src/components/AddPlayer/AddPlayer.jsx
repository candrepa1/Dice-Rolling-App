import React from "react";
import { Form, Name } from "./AddPlayer.styled";

const AddPlayer = ({ handleSubmit, input, handleChange }) => {
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
