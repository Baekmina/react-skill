import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'
import { useCallback, useState } from 'react'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(value); // onInsert에 value값 넘기기
        setValue(''); // value 값 초기화
        e.preventDefault(); // submit 시 새로고침을 방지하기 위함.
    }, [onInsert, value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="할 일을 입력하세요." />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert