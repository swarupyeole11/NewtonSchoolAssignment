import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";

import CountWords from "./components/CountWords";


function App() {
	return (
		<div className="App-header">
			
			<CountWords />
			
		</div>
	);
}

export default App;
