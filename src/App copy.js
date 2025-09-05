import { Component } from "react";
import MyComponent from "./Components/MyComponent"
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./EventHandling/EventPractice";
import ValidationSample from "./Ref/ValidationSample";
import ScrollBox from "./Ref/ScrollBox";
import IterationSample from "./Map/IterationSample";
import LifyCycleSamle from "./LifyCycle/LifyCycleSamle";
import ErrorBoundary from "./LifyCycle/ErrorBoundary";

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

// class App extends Component {
//   render() {
//     return (
//       <IterationSample />
//     )
//     // 컴포넌트에 ref 달기 (컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀)
//     // return (
//     //   <div>
//     //     <ScrollBox ref={(ref) => this.scrollBox=ref} />
//     //     <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//     //   </div> 
//     // )
//   }
// };

// const App = () => {
  // return <ValidationSample />
  // return <EventPractice />
  // return <Say />
  // return <Counter />
//   return <MyComponent name="React">리액트</MyComponent>;
// };


export default App;
