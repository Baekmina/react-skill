import { useState } from "react";
import Counter from "./useState/Counter";
import Info from "./useEffect/Info";

const App = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div>
			<button onClick={() => setVisible(!visible)}>
				{visible ? '숨기기' : '보이기'}
			</button>
			<hr />
			{visible && <Info />}
		</div>
		// <Counter />
	)
}

export default App;