import React from "react";
import Nav from "./Nav";
import HogList from "./HogList.js"
import HogSort from "./HogSort";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
		
			<Nav />
			<HogSort hogs={hogs}/>
			<HogList hogs={hogs}/>
			
			
		</div>
	);
}

export default App;
