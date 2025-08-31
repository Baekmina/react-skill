import { Component } from 'react'

class Counter extends Component {
    // 컴포넌트에 state를 설정할 때는 constructor 메소드 설정
    // constructor(props) {
    //     super(props);
        
    //     // stats의 초기값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     }
    // };

    // 컴포넌트에 state를 설정하는 다른 방법
    state = {
        number: 0,
        fixedNumber: 0
    };

    render () {
        // 현재 stats 조회
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                    // setState를 사용하여 값을 업데이트한 후 특정 작업 실행 (콜백함수)
                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log("방금 setState가 호출되었습니다.");
                            console.log(this.state);
                        }
                    )

                    // this.setState(prevState => {
                    //     return {
                    //         number: prevState.number + 1
                    //     }
                    // });

                    // 위와 기능이 동일한 코드
                    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
                    // this.setState(prevState => ({
                    //     number: prevState.number + 1
                    // }))
                }}>
                    +1
                </button>
            </div>
        )
    }
}

export default Counter