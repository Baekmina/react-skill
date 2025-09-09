import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    })
    const { name, nickname } = state;
    
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