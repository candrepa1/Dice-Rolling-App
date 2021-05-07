import { renderHook } from "@testing-library/react-hooks";
import useRolledHistory from "./useRolledHistory";

test("default values of states", () => {
	const { result } = renderHook(useRolledHistory);

	expect(result.current.rolledArr).toStrictEqual([]);
	expect(result.current.endOfGame).toStrictEqual({});
});
