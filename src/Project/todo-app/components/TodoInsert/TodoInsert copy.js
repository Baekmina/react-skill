import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'
import { useCallback, useState } from 'react'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        onInsert(value);
        setValue("");
        // submit시 새로고침 발생을 방지하기 위한 함수 호출
        e.preventDefault();
    }, [onInsert, value])

    return (
        <form className="TodoInsert" onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} placeholder="할 일을 입력하세요." />
            <button type='submit'>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert