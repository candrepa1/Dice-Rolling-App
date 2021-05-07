import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from "./Table";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { historyContextValue } from "../../test-utils/constants";

test("table head attributes and text", () => {
	const { getByTestId } = render(
		<HistoryContext.Provider value={historyContextValue}>
			<Table />
		</HistoryContext.Provider>
	);

	expect(getByTestId("table-head")).toHaveAttribute("scope", "colgroup");
	expect(getByTestId("table-head")).toHaveTextContent("HISTORY");
});

test("table heading text", () => {
	const { getByText } = render(
		<HistoryContext.Provider value={historyContextValue}>
			<Table />
		</HistoryContext.Provider>
	);

	expect(getByText("TOTAL")).toBeDefined();
});
