import { Component } from "react";
import SassComponent from "./Styling/SASS/SassComponent";
import CSSModule from "./Styling/CSSModule/CSSModule";
import StyledComponent from "./Styling/StyledComponents/StyledComponent";

class App extends Component {
	render() {
		return (
			<StyledComponent />
			// <CSSModule />
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