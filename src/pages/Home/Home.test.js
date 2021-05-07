import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import Home from "./Home";

test("testing UI and testing that the two Links change the URL", () => {
	const history = createMemoryHistory();

	history.push = jest.fn();

	const { getByRole, getByText, getByTestId } = render(
		<Router history={history}>
			<Home />
		</Router>
	);

	expect(getByText("Welcome to Dice Roller 1.0! 🎲")).toBeInTheDocument();

	expect(
		getByRole("heading", {
			name: /You can roll by yourself or roll with other people in multiplayer mode!/i,
		})
	).toBeDefined();

	fireEvent.click(getByTestId("singleplayer"));
	expect(history.push).toHaveBeenCalledWith("/single-player");

	fireEvent.click(getByTestId("mulltiplayer"));
	expect(history.push).toHaveBeenCalledWith("/multiplayer");
});
