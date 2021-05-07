import styled from "styled-components";
import { Button } from "../../components/Dice/Dice.styled";

export const Instructions = styled.ul`
	color: white;
	font-size: 23px;
	line-height: 2;
	margin-bottom: 40px;
`;

export const PlayersContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PlayerName = styled.span`
	text-transform: uppercase;
	color: black;
	margin-right: 20px;
`;

export const PlayersNames = styled.div`
	background-color: white;
	border-radius: 4px;
	padding: 5px 10px;
	padding-left: 20px;
	margin-right: 20px;
`;

export const StartGame = styled(Button)`
	background-color: white;
	font-size: 17px;
	padding: 8px;
	margin-left: 10px;
	&:hover {
		background-color: #cccccc;
	}
`;

export const PlayerTurn = styled.p`
	color: white;
	text-align: center;
	font-size: 20px;
	margin: 40px 0;
`;
