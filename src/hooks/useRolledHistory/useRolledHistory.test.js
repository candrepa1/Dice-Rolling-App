import { renderHook } from "@testing-library/react-hooks";
import useRolledHistory from "./useRolledHistory";

test("default values of states", () => {
	const { result } = renderHook(useRolledHistory);

	expect(result.current.rolledArr).toStrictEqual([]);
	expect(result.current.endOfGame).toStrictEqual({});
	expect(result.current.multiplayerTurn).toStrictEqual([]);
	expect(result.current.doublesCount).toStrictEqual({});
	expect(result.current.multiplayerScore).toStrictEqual({});
});
