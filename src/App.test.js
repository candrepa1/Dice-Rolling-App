import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import MultiPlayer from "./pages/MultiPlayer/MultiPlayer";
import SinglePlayer from "./pages/SinglePlayer/SinglePlayer";
import Home from "./pages/Home/Home";

jest.mock("./pages/MultiPlayer/MultiPlayer");
jest.mock("./pages/SinglePlayer/SinglePlayer");
jest.mock("./pages/Home/Home");

// beforeEach(() => {
// 	jest.resetAllMocks();
// });

describe("Testing the router", () => {
	test("Should render the HomePage on default route", () => {
		Home.mockImplementation(() => <div>HomePageMock</div>);

		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		expect(screen.getByText("HomePageMock")).toBeInTheDocument();
	});

	// test("Should render the Single Player Page on route '/single-player'", () => {
	// 	SinglePlayer.mockImplementation(() => <div>SinglePlayerMock</div>);

	// 	render(
	// 		<MemoryRouter initialEntries={["/single-player"]}>
	// 			<App />
	// 		</MemoryRouter>
	// 	);

	// 	expect(screen.getByText("SinglePlayerMock")).toBeInTheDocument();
	// });

	// test("Should render the Multiplayer page on route '/multiplayer'", () => {
	// 	MultiPlayer.mockImplementation(() => <div>MultiplayerMock</div>);

	// 	render(
	// 		<MemoryRouter initialEntries={["/multiplayer"]}>
	// 			<App />
	// 		</MemoryRouter>
	// 	);

	// 	expect(screen.getByText("MultiplayerMock")).toBeInTheDocument();
	// });
});
