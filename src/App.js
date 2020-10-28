/** @format */

import React from "react"
import MainRouter from "./Routes"
import {StoreProvider} from "./util/store"
import "./App.scss"

function App() {
	return (
		<div className="App">
			<StoreProvider>
				<MainRouter />
			</StoreProvider>
		</div>
	)
}

export default App
