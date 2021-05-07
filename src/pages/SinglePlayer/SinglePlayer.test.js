import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SinglePlayer from "./SinglePlayer";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { historyContextValue } from "../../test-utils/constants";

test("testing UI by text and presence of a table", () => {
	const { getByText, getByRole } = render(
		<HistoryContext.Provider value={historyContextValue}>
			<SinglePlayer />
		</HistoryContext.Provider>
	);

	expect(getByText("You have 10 turns to roll the dice,")).toBeDefined();

	expect(getByRole("table")).toBeInTheDocument();
});
