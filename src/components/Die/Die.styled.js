import styled from "styled-components";

export const DieContainer = styled.div`
	background-color: white;
	height: 80px;
	width: 80px;
	margin-bottom: 20px;
	margin-right: 20px;
	color: black;
	border-radius: 4px;
	padding: 6px;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	grid-template-areas:
		"a . c"
		"d e f"
		"g . i";
`;

export const Dot = styled.span`
	display: block;
	align-self: center;
	justify-self: center;
	background-color: black;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	&:nth-child(2) {
		grid-area: i;
	}
	&:nth-child(3) {
		grid-area: c;
	}
	&:nth-child(4) {
		grid-area: g;
	}
	&:nth-child(5) {
		grid-area: d;
	}
	&:nth-child(6) {
		grid-area: f;
	}
	&:nth-child(odd):last-child {
		grid-area: e;
	}
`;
