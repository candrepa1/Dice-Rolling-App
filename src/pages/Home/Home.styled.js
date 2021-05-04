import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	color: white;
`;

export const Title = styled.h1`
	font-size: 60px;
`;

export const Description = styled.h2`
	font-size: 25px;
`;

export const ToAnotherView = styled(Link)`
	background-color: white;
	text-decoration: none;
	color: black;
	padding: 15px;
	border-radius: 8px;
	margin-right: 30px;
	font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
	font-weight: bold;
	font-size: 20px;
	&:hover {
		background-color: #cccccc;
	}
`;
