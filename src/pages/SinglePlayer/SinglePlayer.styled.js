import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	color: white;
	padding: 0 100px;
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
`;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
`;
