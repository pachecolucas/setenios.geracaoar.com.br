import styled from 'styled-components'

type Props = {
  img: number
}

export default function Simple(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`simple${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
