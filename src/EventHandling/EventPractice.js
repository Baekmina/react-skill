// 함수 컴포넌트로 쉽게 구현하기
import { useState } from "react"

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;

    const handleChange = (e) => {
        const nextForm = {
            ...form, // 기존의 form 내용을 가져온 후,
            [e.target.name]: e.target.value // 원하는 값으로 덮어 씌우기
        }
        setForm(nextForm);
    }

    const handleClick = () => {
        alert(username + ": " + message);
        setForm({
            username: '',
            message: ''
        })
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요."
                value={message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
                {/* alert를 사용하여 현재 메세지 값을 화면에 표출 */}
                <button onClick={handleClick}>
                    확인
                </button>
        </div>
    )
}

export default EventPractice

// import { Component } from "react"

// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: ''
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     // 새 메서드를 만들 때 마다 constructor를 수정해야하니 함수형태로 변경
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         })
//     }

//     // Enter 이벤트 시 handleClick 불러오기
//     handleKeyDown = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//           <div>
//               <h1>이벤트 연습</h1>
//               <input 
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={this.state.username}
//                 onChange={this.handleChange}
//               />
//               <input 
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요."
//                 value={this.state.message}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyDown}
//               />
//               {/* alert를 사용하여 현재 메세지 값을 화면에 표출 */}
//               <button onClick={this.handleClick}>
//                 확인
//               </button>
//           </div>
//         )
//     }
// }

// export default EventPractice