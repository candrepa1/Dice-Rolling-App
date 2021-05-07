import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";

jest.mock("./pages/Home/Home");

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
});
