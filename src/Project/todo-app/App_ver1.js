import { useCallback, useRef, useState } from "react";
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

	const nextId = useRef(4);

	const handleInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		}
		setTodos(todos.concat(todo));
		nextId.current += 1;
	}, [todos]);

	const handleRemove = useCallback((id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}, [todos]);

	const handleToggle = useCallback((id) => {
		setTodos(
			todos.map(
				todo => todo.id === id ? {...todo, checked: !todo.checked} : todo
			)
		)
	}, [todos]);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={handleInsert} />
			<TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
		</TodoTemplate>
	)
}

export default App;