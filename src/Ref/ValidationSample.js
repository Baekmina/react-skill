import { Component } from "react"
import './ValidationSample.css'

// 함수 컴포넌트에서 ref를 사용하는 방법
class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        })
        // onClick 이벤트가 발생할 때 input에 포커스를 주기
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input 
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ''}
                />
                <button onClick={this.handleClick}>검증시작</button>
            </div>
        )
    }
}

export default ValidationSample