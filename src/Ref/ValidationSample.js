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
    }

    render() {
        return (
            <div>
                <input 
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