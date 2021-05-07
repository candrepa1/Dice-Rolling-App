import React, { useState } from "react";

const useMultiplayer = () => {
	const [shot, setShot] = useState({});
	const [player, setPlayer] = useState("");

	const addRoll = (score) => {
		setShot(score);
	};

	const addPlayer = (playerName) => {
		setPlayer(playerName);
	};

	return {
		shot,
		player,
		addRoll,
		addPlayer,
	};
};

export default useMultiplayer;
