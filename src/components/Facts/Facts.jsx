import React, { useContext } from "react";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { Stats } from "./Facts.style";

const Facts = () => {
	const { endOfGame } = useContext(HistoryContext);
	return (
		<Stats>
			You got {endOfGame.score} out of {endOfGame.totalPossibleScore}, so I
			guess you are{" "}
			{((endOfGame.score * 100) / endOfGame.totalPossibleScore).toFixed(2)}% as
			lucky as the luckiest person in the world?!
		</Stats>
	);
};

export default Facts;
