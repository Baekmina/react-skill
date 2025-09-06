import { useEffect, useState } from 'react';

const Info = () => {
    // useState
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    // useEffect
    // 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.')
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    // 마운트될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log('마운드될 때만 실행됩니다.')
    // }, [])

    // 특정 값이 업데이트될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log(name)
    // }, [name])

    // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶을 때
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return() => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name])

    // 언마운트될 때만 뒷정리 함수를 호출하고 싶을 때
    useEffect(() => {
        console.log('effect')
        return() => {
            console.log('unmount')
        }
    }, [])
   
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    이름: <b>{name}</b>
                </div>
                <div>
                    닉네임: <b>{nickname}</b>
                </div>
            </div>
        </div>
    )
}

export default Info