import React from "react";
import { TableContainer, TableData, TableHeading } from "../Table/Table.styled";

const MultiplayerTable = ({ multiplayerTurn }) => {
	// the history log for the turns of multiplayer mode. Receives multiplayerTurn, which is an array with objects inside, each object has the following structure {player: user1, turn: [5,2]}, in which turn is the numbers just rolled.
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
