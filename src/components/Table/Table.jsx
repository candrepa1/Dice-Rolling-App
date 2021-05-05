import React, { useContext, useEffect } from "react";
import { HistoryContext } from "../../context/historyContext/HistoryContextProvider";
import { TableContainer, TableHeading, TableData } from "./Table.styled";

const Table = ({ rolled }) => {
	const { rolledArr } = useContext(HistoryContext);

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
				{rolledArr &&
					rolledArr.map((item, index) => (
						<tr key={index}>
							<TableHeading scope="row">{index + 1}st Attempt</TableHeading>
							<TableData>
								{item.turn.length} dice -{" "}
								{item.turn.reduce(
									(accumulator, currentValue) => accumulator + currentValue
								)}{" "}
								{/* {[...item.turn]} */}
							</TableData>
						</tr>
					))}
				{/* <tr>
					<TableHeading scope="row">1st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">2st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">3st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">4st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">5st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">6st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">7st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">8st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">9st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr>
				<tr>
					<TableHeading scope="row">10st Attempt</TableHeading>
					<TableData>1</TableData>
				</tr> */}
			</tbody>
		</TableContainer>
	);
};

export default Table;
