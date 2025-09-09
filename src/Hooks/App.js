import { useState } from "react";
import Counter from "./useState/Counter";
import Info from "./useEffect/Info";
import Average from "./useMemo/Average";

const App = () => {
	const [visible, setVisible] = useState(false);

	return (
		// <Average />
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