import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { TableContainer, TableHeading, TableData } from "./Table.styled";

const Table = () => {
	const [totalPossibleScore, setTotalPossibleScore] = useState(0);
	const [amountOfDiceRolled, setAmountOfDiceRolled] = useState(0);
	const [score, setScore] = useState(0);
	const { rolledArr, pushToEndOfGame } = useContext(HistoryContext);

	useEffect(() => {
		if (rolledArr.length === 10) {
			rolledArr.forEach((element) => {
				setAmountOfDiceRolled((prev) => {
					console.log(prev, element.turn.length);
					return prev + element.turn.length;
				});
				element.turn.forEach((item) => {
					setScore((prev) => {
						return prev + item;
					});
				});
			});
		}
	}, [rolledArr]);

	useEffect(() => {
		pushToEndOfGame({ totalPossibleScore, score });
	}, [totalPossibleScore, score]);

	useEffect(() => {
		setTotalPossibleScore(amountOfDiceRolled * 6);
	}, [amountOfDiceRolled]);

	return (
		<TableContainer>
			<thead>
				<tr>
					<TableHeading scope="colgroup" colSpan="2">
						HISTORY
					</TableHeading>
				</tr>
			</thead>
			<tbody>
				{rolledArr.map((item, index) => (
					<tr key={index}>
						<TableHeading scope="row">Attempt #{index + 1}</TableHeading>
						<TableData>
							{item.turn.length} {item.turn.length === 1 ? "die" : "dice"} -{" "}
							{item.turn.reduce(
								(accumulator, currentValue) => accumulator + currentValue
							)}{" "}
							{/* {[...item.turn]} */}
						</TableData>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<TableHeading scope="row">TOTAL</TableHeading>
					<TableData>{score}</TableData>
				</tr>
			</tfoot>
		</TableContainer>
	);
};

export default Table;
