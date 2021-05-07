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

export const Podium = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 100px;
	color: white;
	font-size: 23px;
`;

export const StatsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
`;

export const LeftSide = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	color: white;
`;

export const RightSide = styled.div`
	display: flex;
	width: 50%;
`;

export const Items = styled.li`
	text-transform: capitalize;
`;
