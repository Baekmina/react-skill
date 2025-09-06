import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LifyCycleSamle from "./LifyCycleSamle";

// 랜덤 색상 생성
function getRendomColor() {
  // Math.random(): 0이상 1미만의 난수를 만들어줌(ex: 0.12345 등)
  // * 16777215: 16777215 = 0xFFFFFF (16진수로 표현한 최대 RGB 값)
  // Math.floor(): 소수점 버림(내림)해서 정수 값으로 만들어줌
  // toString(16): 만들어진 정수를 16진수 문자열로 바꿔줌 (ex: 255 => "ff")
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRendomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {/* error를 잡아내기 위한 컴포넌트 */}
        <ErrorBoundary>
          <LifyCycleSamle color={this.state.color} />
        </ErrorBoundary>
      </div>
    )
  }
};

export default App;
