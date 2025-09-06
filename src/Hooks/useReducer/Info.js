import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        // input의 name 값과 value 값을 의미
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const { name, nickname } = state;

    const onChange = (e) => {
        // dispatch에 전달되는 값은 e.target => 즉, input 요소 자체
        dispatch(e.target);
    }
    
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
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