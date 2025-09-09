import { useCallback, useMemo, useState } from "react"

const getAverage = (numbers) => {
    console.log('평균값 계산 중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    // useCallback: 렌더링 성능을 최적화해야할 때 사용
    // useCallback(a, [b]);
    // a = 생성하고 싶은 함수, b = 배열 (어떤 값이 바뀌었을 때 함수를 새로 생성할지 명시해야함.)

    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, []) // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('')
    }, [number, list]) // number 혹은 list가 바뀌었을 때만 함수 생성

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