import React from "react";
import { TableContainer, TableData, TableHeading } from "../Table/Table.styled";

const MultiplayerTable = ({ multiplayerTurn }) => {
	return (
		<TableContainer>
			<thead>
				<tr>
					<TableHeading scope="colgroup" colSpan="3">
						HISTORY
					</TableHeading>
				</tr>
			</thead>
			<tbody>
				{multiplayerTurn.map((item, index) => (
					<tr key={index}>
						<TableHeading>{item.player}</TableHeading>
						<TableData>
							{item.turn.reduce((acc, current) => acc + current)}
						</TableData>
						<TableData>
							{item.turn[0] === item.turn[1] ? "DOUBLES" : null}
						</TableData>
					</tr>
				))}
			</tbody>
		</TableContainer>
	);
};

export default MultiplayerTable;
