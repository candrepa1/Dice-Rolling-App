import React, { useState, useEffect } from "react";
import AddPlayer from "../../components/AddPlayer/AddPlayer";
import Dice from "../../components/Dice/Dice";
import useRolledHistory from "../../hooks/useRolledHistory/useRolledHistory";
import {
	Instructions,
	PlayersContainer,
	PlayerName,
	PlayersNames,
	StartGame,
	PlayerTurn,
} from "./MultiPlayer.styled";

const MultiPlayer = () => {
	const [input, setInput] = useState("");
	const [players, setPlayers] = useState([]);
	const [startGame, setStartGame] = useState(false);
	const [isRollPressed, setIsRollPressed] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState(-1);

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
		if (startGame === false) {
			setPlayers([]);
			setInput("");
			setStartGame(false);
			setIsRollPressed(false);
			setCurrentPlayer(0);
		}
	}, [startGame]);

	return (
		<>
			<Instructions>
				<li>Enter the names of all players, at least 2 players.</li>
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
							{/* {rolledArr.map((item, index) => (
						<p key={index}>{item.turn}</p>
					))} */}
						</>
					)}
					<table style={{ color: "white" }}>
						<thead>
							<tr>
								<th>SCORE</th>
							</tr>
						</thead>
						<tbody>
							{multiplayerTurn.map((item, index) => (
								<tr key={index}>
									<th>{item.player}</th>
									<td>
										{item.turn.reduce((acc, current) => acc + current)}{" "}
										{item.turn[0] === item.turn[1] ? "DOUBLES" : null}
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>TOTAL</tfoot>
					</table>
					<ul style={{ color: "white" }}>
						{players.length * 5 === multiplayerTurn.length &&
							players.map((item) => (
								<li>
									{item}: {multiplayerScore[item]}
								</li>
							))}
					</ul>
					<ul style={{ color: "white" }}>
						{players.length * 5 === multiplayerTurn.length &&
							players.map((item) => (
								<li>
									{item}: {doublesCount[item]}
								</li>
							))}
					</ul>
				</>
			)}
		</>
	);
};

export default MultiPlayer;
