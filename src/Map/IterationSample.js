import { useState } from "react"

const IterationSample = () => {
    // 유동적인 데이터 렌더링
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목의 id를 시작할 값

    // 데이터 추가하기
    const onChange = (e) => {
        setInputText(e.target.value);
    }
    const onClick = () => {
        // concat: 원본 배열을 유지하면서 새로운 요소를 추가할 때 사용
        const nextNames = names.concat({ 
            id: nextId, // nextId값을 id로 설정
            text: inputText,
        })
        setNextId(nextId + 1); // nextId 값에 1을 더하기
        setNames(nextNames); // names 값을 업데이트
        setInputText(""); // inputText를 비우기
    }

    // 데이터 제거하기
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ))

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )

    // 고정적인 데이터 렌더링
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // // key: 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위해 사용
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>)

    // return (
    //     <ul>
    //         {nameList}
    //     </ul>
    // )
}

export default IterationSample