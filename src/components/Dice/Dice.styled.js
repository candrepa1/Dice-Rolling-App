import styled from "styled-components";

export const DiceContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 75%;
`;

export const Button = styled.button`
	background-color: white;
	text-decoration: none;
	color: black;
	padding: 10px;
	border-radius: 8px;
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
	font-weight: bold;
	font-size: 15px;
	&:hover {
		background-color: #cccccc;
	}
`;
