import React from "react";
import {
	Title,
	HomeContainer,
	Description,
	ToAnotherView,
} from "./Home.styled";

const Home = () => {
	return (
		<HomeContainer>
			<Title>Welcome to Dice Roller 1.0! 🎲</Title>
			<Description>
				You can roll by yourself or roll with other people in multiplayer mode!
			</Description>
			<div>
				<ToAnotherView to="/single-player">Single Player Mode</ToAnotherView>
				<ToAnotherView to="/multiplayer">Multiplayer Mode</ToAnotherView>
			</div>
		</HomeContainer>
	);
};

export default Home;
