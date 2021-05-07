import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GameLogContextProvider from "./context/gameLogContext/GameLogContextProvider";
import HistoryContextProvider from "./context/historyContext/HistoryContextProvider";
import Home from "./pages/Home/Home";
import MultiPlayer from "./pages/MultiPlayer/MultiPlayer";
import SinglePlayer from "./pages/SinglePlayer/SinglePlayer";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/multiplayer">
					<GameLogContextProvider>
						<MultiPlayer />
					</GameLogContextProvider>
				</Route>
				<Route path="/single-player">
					<HistoryContextProvider>
						<SinglePlayer />
					</HistoryContextProvider>
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
