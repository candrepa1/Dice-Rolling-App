import styled from "styled-components";

export const DiceContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 75%;
	margin: 20px 0;
`;

export const Button = styled.button`
	background-color: tan;
	text-decoration: none;
	color: black;
	padding: 15px;
	border-radius: 8px;
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
	font-weight: bold;
	font-size: 15px;
	border: 0;
	&:hover {
		background-color: #dec98a;
	}
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Total = styled.p`
	margin-top: 50px;
	text-decoration: underline;
	color: white;
`;
