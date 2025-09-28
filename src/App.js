import { useCallback, useReducer, useRef, useState } from "react";
import TodoInsert from "./Project/todo-app/components/TodoInsert/TodoInsert";
import TodoList from "./Project/todo-app/components/TodoList/TodoList";
import TodoTemplate from "./Project/todo-app/components/TodoTemplate/TodoTemplate";

// onToggle, onRemove 함수가 바뀌지 않는 방법
// 1. useState의 함수형 업데이트
function createBulkTodos() {
	const array = [];
	for (let i = 1; i <= 2500; i++ ) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		})
	}
	return array
}

// 2. useReducer 사용하기
function todoReducer(todos, action) {
	switch(action.type) {
		case 'INSERT': // 새로추가
			// { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false, } }
			return todos.concat(action.todo)
		case 'REMOVE': //제거
			// { type: 'REMOVE', id: 1 }
			return todos.filter(todo => todo.id !== action.id)
		case 'TOGGLE': //토글
			return todos.map(todo => 
				todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
			)
		default:
			return todos;
	}
}

const App = () => {
	// useReducer => 두번째 파라미터에 초기값을 넣어줘야하는데, 그 대신 undefined를 넣고, 세번째 파라미터에 초기 상태(creatBulkTodos)를 만들어줌.
	const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
	// const [todos, setTodos] = useState(createBulkTodos)

	// 고윳값으로 사용될 id
	// ref를 사용하여 변수에 담기
	const nextId = useRef(2501);

	const onInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		}
		// setTodos(todos => todos.concat(todo));
		dispatch({ type: 'INSERT', todo });
		nextId.current += 1;
	}, [])

	const onRemove = useCallback((id) => {
		// setTodos(todos => todos.filter(todo => todo.id !== id))
		dispatch({ type: 'REMOVE', id })
	}, [])

	const onToggle = useCallback((id) => {
		// setTodos(todos =>
		// 	todos.map(todo =>
		// 		todo.id === id ? { ...todo, checked: !todo.checked } : todo,
		// 	)
		// )
		dispatch({ type: 'TOGGLE', id })
	}, [])

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	)
}

export default App;