import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MultiPlayer from "./MultiPlayer";

test("testing UI elements", () => {
	const { getByTestId } = render(<MultiPlayer />);

	expect(getByTestId("first-instruction")).toHaveTextContent(
		"Enter the names of all players, at least 2 players."
	);
});
