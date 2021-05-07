import React, { useState, useEffect } from "react";
import AddPlayer from "../../components/AddPlayer/AddPlayer";
import Dice from "../../components/Dice/Dice";
import MultiplayerTable from "../../components/MultiplayerTable/MultiplayerTable";
import useRolledHistory from "../../hooks/useRolledHistory/useRolledHistory";
import {
	Instructions,
	PlayersContainer,
	PlayerName,
	PlayersNames,
	StartGame,
	PlayerTurn,
	Podium,
	StatsContainer,
	LeftSide,
	RightSide,
	Items,
} from "./MultiPlayer.styled";

const MultiPlayer = () => {
	const [input, setInput] = useState("");
	const [players, setPlayers] = useState([]);
	const [startGame, setStartGame] = useState(false);
	const [isRollPressed, setIsRollPressed] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState(-1);
	const [podium, setPodium] = useState([]);

	const {
		saveMultiplayerTurn,
		multiplayerTurn,
		doublesCount,
		multiplayerScore,
	} = useRolledHistory();

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlayers((prev) => [...prev, input]);
		setInput("");
	};

	const handleClick = () => {
		setIsRollPressed(!isRollPressed);
	};

	useEffect(() => {
		saveMultiplayerTurn(
			JSON.parse(localStorage.getItem("singlePlayer")),
			players[currentPlayer]
		);
		localStorage.clear();
		setCurrentPlayer((prev) => {
			if (currentPlayer === players.length - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		});
	}, [isRollPressed]);

	useEffect(() => {
		//clean up if the user wants to end the game
		if (startGame === false) {
			setPlayers([]);
			setInput("");
			setStartGame(false);
			setIsRollPressed(false);
			setCurrentPlayer(0);
			saveMultiplayerTurn();
			setPodium([]);
		}
	}, [startGame]);

	useEffect(() => {
		// sorting the results array so that the podium element can be displayed from highest to lowest.
		if (players.length * 5 === multiplayerTurn.length) {
			const sortable = Object.entries(multiplayerScore).sort(
				([, a], [, b]) => b - a
			);
			setPodium(sortable);
		}
	}, [multiplayerScore]);

	return (
		<>
			<Instructions>
				<li data-testid="first-instruction">
					Enter the names of all players, at least 2 players.
				</li>
				<li>
					The amount of turns will change depending on the number of players.
				</li>
				<li>
					The winner will be the person that has the highest add up at the end,
					if there is a tie, it will be decided based on the number of doubles
					rolled.
				</li>
			</Instructions>
			<PlayersContainer>
				<AddPlayer
					handleSubmit={handleSubmit}
					input={input}
					handleChange={handleChange}
				/>
				<PlayersNames>
					{players.map((user, index) => (
						<PlayerName key={index}>{user}</PlayerName>
					))}
				</PlayersNames>
				{players.length > 1 ? (
					<StartGame onClick={() => setStartGame(!startGame)}>
						{startGame ? "END GAME" : "START GAME"}
					</StartGame>
				) : (
					<p style={{ color: "white" }}>Please add at least 2 players!</p>
				)}
			</PlayersContainer>

			{startGame && players.length > 1 && (
				<>
					{players.length * 5 === multiplayerTurn.length ? null : (
						<>
							<PlayerTurn>
								It's <span>{players[currentPlayer]}'s</span> turn
							</PlayerTurn>
							<Dice
								numberOfDice={2}
								isRollPressed={isRollPressed}
								handleClick={handleClick}
							/>
						</>
					)}
					{players.length * 5 === multiplayerTurn.length && (
						<StatsContainer>
							<LeftSide>
								<MultiplayerTable multiplayerTurn={multiplayerTurn} />
							</LeftSide>
							<RightSide>
								<Podium>
									<h2>PODIUM:</h2>
									<ol>
										{podium.map((item, index) => (
											<Items key={index}>
												{item[0]}: {item[1]}
											</Items>
										))}
									</ol>
								</Podium>
								<Podium>
									{Object.keys(doublesCount).length === 0 &&
									doublesCount.constructor === Object ? null : (
										<>
											<h2>DOUBLES:</h2>
											<ul>
												{players.length * 5 === multiplayerTurn.length && (
													<>
														{players.map((item) => (
															<Items>
																{item}: {doublesCount[item] || 0}
															</Items>
														))}
													</>
												)}
											</ul>
										</>
									)}
								</Podium>
							</RightSide>
						</StatsContainer>
					)}
				</>
			)}
		</>
	);
};

export default MultiPlayer;
