import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    // 컴포넌트에 ref 달기 (컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀)
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div> 
    )
  }
};

export default App;
