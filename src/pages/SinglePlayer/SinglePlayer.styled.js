import styled from "styled-components";
import { Button } from "../../components/Dice/Dice.styled";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	padding: 0 100px;
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	margin: 20px 0;
`;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	margin: 20px 0;
`;

export const TopContainer = styled.div`
	width: 100%;
	height: 20%;
	margin: 50px 0;
`;

export const BottomContainer = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
`;

export const PlayAgain = styled(Button)`
	background-color: white;
	font-size: 20px;
	&:hover {
		background-color: #cccccc;
	}
`;

// export const FactsContainer = styled.div`
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: end;
// 	align-items: center;
// `;
