import styled from "styled-components";
import { Button } from "../Dice/Dice.styled";

export const FormContainer = styled.form`
	color: white;
	margin-bottom: 20px;
`;

export const Submit = styled(Button)`
	padding: 8px;
	background-color: white;
	&:hover {
		background-color: #cccccc;
	}
`;

export const Select = styled.select`
	margin: 0 10px;
	background-color: transparent;
	color: white;
	border: white;
	font-size: 17px;
`;
