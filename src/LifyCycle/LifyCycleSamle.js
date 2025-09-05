import { Component } from "react"

// 각 라이프사이클 메서드를 실행할 때마다 콘솔 디버거에 기록
class LifyCycleSamle extends Component {
    state = {
        number: 0,
        color: null,
    }

    // ref를 설정할 부분
    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 부모에게 받은 color 값을 state에 동기화
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않음
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }

    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // snapshot 값으로 반환한 것 조회
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color,
        }

        return (
            <div>
                {/* 에러를 잡아내기 위한 코드 */}
                {this.props.missing.value}
                <h1 style={style} ref={(ref) => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifyCycleSamle