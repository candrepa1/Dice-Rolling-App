import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MultiplayerTable from "./MultiplayerTable";

test("checks returns based on turns", () => {
	const multiplayerTurn = [
		{ player: "user1", turn: [5, 2] },
		{ player: "user2", turn: [6, 6] },
	];

	const { getByText } = render(
		<MultiplayerTable multiplayerTurn={multiplayerTurn} />
	);

	expect(getByText("HISTORY")).toBeDefined();
	expect(getByText("user1")).toBeDefined();
	expect(getByText("7")).toBeDefined();
	expect(getByText("DOUBLES")).toBeDefined();
});
