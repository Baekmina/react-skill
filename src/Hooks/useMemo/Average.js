import { useMemo, useState } from "react"

const getAverage = (numbers) => {
    console.log('평균값 계산 중...');
    if (numbers.length === 0) return 0; 
    // return 0이 되는 순간 함수는 바로 종료됨. 따라서 다음에 오는 코드들은 실행되지 않음.
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length; // 합계를 나누어서 평균을 구하는 공식
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value)
    }

    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
    }

    // useMemo: 특정 계산 결과를 기억해두는 hook
    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                평균값: <b>{avg}</b>
            </div>
        </div>
    )
}

export default Average