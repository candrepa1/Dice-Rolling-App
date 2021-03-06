import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Facts from "./Facts";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { historyContextValue } from "../../test-utils/constants";

test("context value received", () => {
	const container = render(
		<HistoryContext.Provider value={historyContextValue}>
			<Facts />
		</HistoryContext.Provider>
	);

	expect(historyContextValue.endOfGame).toStrictEqual({
		score: 30,
		totalPossibleScore: 60,
	});
});
