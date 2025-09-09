import { useEffect, useRef } from "react"

// 리렌더링이 필요없는 상태를 기억해야 할 때
const RefSample = () => {
    // const id = useRef(1);
    // const setId = (n) => {
    //     id.current = n
    // }
    // const printId = () => {
    //     console.log(id.current)
    // }

    // GPT 예시 (state로 관리하면 리렌더링이 되기 때문에 ref로 관리)
    const timerId = useRef(null);

    const start = () => {
        // start를 여러 번 부르면 setInterval이 중첩 실행되기 때문에 start 전에 clearInterval(timerId.current) 실행
        if (timerId.current) clearInterval(timerId.current);
        timerId.current = setInterval(() => {
            console.log("tick");
        }, 1000);
    }
    const stop = () => {
        clearInterval(timerId.current);
    };
    useEffect(() => {
        return () => clearInterval(timerId.current)
    }, [])

    return (
        <div>
            refSample
            <button onClick={start}>시작</button>
            <button onClick={stop}>정지</button>
        </div>
    )
}

export default RefSample