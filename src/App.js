import { Component } from "react";
import MyComponent from "./Components/MyComponent"
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./EventHandling/EventPractice";
import ValidationSample from "./Ref/ValidationSample";
import ScrollBox from "./Ref/ScrollBox";
import IterationSample from "./Map/IterationSample";

class App extends Component {
  render() {
    return (
      <IterationSample />
    )

    // 컴포넌트에 ref 달기 (컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀)
    // return (
    //   <div>
    //     <ScrollBox ref={(ref) => this.scrollBox=ref} />
    //     <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    //   </div> 
    // )
  }
};

// const App = () => {
  // return <ValidationSample />
  // return <EventPractice />
  // return <Say />
  // return <Counter />
//   return <MyComponent name="React">리액트</MyComponent>;
// };


export default App;
