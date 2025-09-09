import { useState } from "react";
import TodoInsert from "./Project/todo-app/components/TodoInsert/TodoInsert";
import TodoList from "./Project/todo-app/components/TodoList/TodoList";
import TodoTemplate from "./Project/todo-app/components/TodoTemplate/TodoTemplate";

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '리액트의 기초 알아보기',
			checked: true,
		},
		{
			id: 2,
			text: '컴포넌트 스타일링해 보기',
			checked: true,
		},
		{
			id: 3,
			text: '일정 관리 앱 만들어 보기',
			checked: false,
		},
	]);

	return (
		<TodoTemplate>
			<TodoInsert />
			<TodoList todos={todos} />
		</TodoTemplate>
	)
}

export default App;