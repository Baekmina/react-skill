import { Component } from "react";
import SassComponent from "./Styling/SASS/SassComponent";
import CSSModule from "./Styling/CSSModule/CSSModule";

class App extends Component {
	render() {
		return (
			<CSSModule />
			// <SassComponent />
		)
	}
}

// const App = () => {
// 	return (
// 		<SassComponent />
// 	)
// }

export default App;