import React, { createContext } from "react";
import useRolledHistory from "../../hooks/useRolledHistory/useRolledHistory";

const GameLogContext = createContext();

const GameLogContextProvider = ({ children }) => {
	const value = useRolledHistory();
	return (
		<GameLogContext.Provider value={value}>{children}</GameLogContext.Provider>
	);
};

export default GameLogContextProvider;
