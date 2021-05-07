import { useState } from "react";

const useRolledHistory = () => {
	const [rolledArr, setRolledArr] = useState([]);
	const [endOfGame, setEndOfGame] = useState({});
	const [multiplayerTurn, setMultiplayerTurn] = useState([]);
	const [doublesCount, setDoublesCount] = useState({});
	const [multiplayerScore, setMultiplayerScore] = useState({});

	const pushToArr = (rolled) => {
		if (rolled) {
			if (rolledArr.length <= 9) {
				setRolledArr((rolledArr) => [...rolledArr, { turn: rolled }]);
			}
		} else {
			setRolledArr([]);
		}
	};

	const saveMultiplayerTurn = (turn, player) => {
		if (turn && player) {
			setMultiplayerTurn((prev) => [...prev, { player, turn }]);
			setMultiplayerScore((prev) => {
				return {
					...prev,
					[player]: prev[player]
						? prev[player] + turn[0] + turn[1]
						: turn[0] + turn[1],
				};
			});
			if (turn[0] === turn[1]) {
				setDoublesCount((prev) => {
					return {
						...prev,
						[player]: prev[player] + 1 || 1,
					};
				});
			}
		}
	};

	const pushToEndOfGame = (object) => {
		setEndOfGame(object);
	};

	return {
		rolledArr,
		pushToArr,
		endOfGame,
		pushToEndOfGame,
		saveMultiplayerTurn,
		multiplayerTurn,
		doublesCount,
		multiplayerScore,
	};
};

export default useRolledHistory;
