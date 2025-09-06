import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    // useReducer: 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태로 반환하는 함수
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>현재 카운터 값은 <b>{state.value}</b> 입니다.</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    )
}

export default Counter