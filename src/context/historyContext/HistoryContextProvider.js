import React, { createContext } from "react";
import useRolledHistory from "../../hooks/useRolledHistory/useRolledHistory";

export const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
	// context provider for single player mode
	const history = useRolledHistory();
	return (
		<HistoryContext.Provider value={history}>
			{children}
		</HistoryContext.Provider>
	);
};

export default HistoryContextProvider;
