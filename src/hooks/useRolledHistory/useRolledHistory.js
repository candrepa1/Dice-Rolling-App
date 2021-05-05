import React, { useEffect, useState } from "react";

const useRolledHistory = () => {
	const [rolledArr, setRolledArr] = useState([]);
	const [endOfGame, setEndOfGame] = useState({});

	const pushToArr = (rolled) => {
		if (rolled) {
			if (rolledArr.length <= 9) {
				setRolledArr((rolledArr) => [...rolledArr, { turn: rolled }]);
			}
		} else {
			setRolledArr([]);
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
	};
};

export default useRolledHistory;
