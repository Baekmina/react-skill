import { useCallback, useRef, useState } from "react";
import TodoInsert from "./Project/todo-app/components/TodoInsert/TodoInsert";
import TodoList from "./Project/todo-app/components/TodoList/TodoList";
import TodoTemplate from "./Project/todo-app/components/TodoTemplate/TodoTemplate";

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "리액트의 기초 알아보기",
			checked: true,
		},
		{
			id: 2,
			text: "컴포넌트 스타일링해 보기",
			checked: true,
		},
		{
			id: 3,
			text: "일정 관리 앱 만들어 보기",
			checked: false,
		}
	])

	const nextId = useRef(4);

	const onInsert = useCallback((text) => { // 새로운 todo의 내용(text)을 받는 것임.
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		}
		setTodos(todos.concat(todo)); // todos에 새로운 todo 객체 추가하기
		nextId.current += 1; // id + 1 해주기
	}, [todos])

	const onRemove = useCallback((id) => { // 삭제하고 싶은 항목 = id
		// filter: 배열을 돌면서 true 값만 남김.
		// todo.id가 id랑 같지 않은 경우 => ture => 배열에 남김
		// todo.id가 id랑 같은 경우 => false => 배열에서 제거
		setTodos(todos.filter(todo => todo.id !== id))
	}, [todos])

	const onToggle = useCallback((id) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo,
			)
		)
	}, [todos])

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	)
}

export default App;