import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dice from "./Dice";

test("the button should have roll time as text", () => {
	const { getByTestId } = render(<Dice />);

	expect(getByTestId("roll-button")).toHaveTextContent("ROLL TIME 🎲");
});
