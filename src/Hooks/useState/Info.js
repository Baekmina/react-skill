
import { useState } from 'react';

// 상태를 여러 개 관리해야할 때
const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }
    
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