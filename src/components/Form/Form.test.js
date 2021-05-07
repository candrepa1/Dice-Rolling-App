import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./Form";

test("presence of label text of the select element", () => {
	const { getByText } = render(<Form />);

	expect(getByText("Dice to be rolled:")).toBeDefined();
});

test("presence of button with the text of Apply", () => {
	const { getByRole } = render(<Form />);

	expect(getByRole("button", { name: /Apply/i })).toBeInTheDocument();
});
