import React, { Component } from "react"

// creatRef를 통한 ref 설정
class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
          <div>
            <input ref={this.input}/>
          </div>
        )
    }
}

export default RefSample