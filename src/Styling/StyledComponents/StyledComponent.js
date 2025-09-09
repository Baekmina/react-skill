import styled, { css } from 'styled-components'

// 반응형 모듈화하기
const sizes = {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc;
}, {})

const Box = styled.div`
    // props 값을 직접 전달 가능
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    /* 반응형 */
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
    /* @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    } */
`

const Button = styled.button `
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: content;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* props를 참조할 경우 css로 감싸줘야함. */
    ${props =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `
    }

    & + button {
        margin-left: 1rem;
    }
`

const StyledComponent = () => {
  return (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
  )
}

export default StyledComponent