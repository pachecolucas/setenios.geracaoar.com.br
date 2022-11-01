import styled from 'styled-components'
import Element from './element'
import SubElement from './element/sub'
import SubSubElement from './element/sub/sub'

const SIZE = 100

export default function Setenios(props: any) {
  return (
    <Wrapper>
      <Layer3>
        <SubSubElement position={3} type="air" />
        <SubSubElement position={2} type="earth" />
        <SubSubElement position={1} type="water" />
      </Layer3>
      <Layer2>
        <SubElement position={2} type="earth" />
        <SubElement position={1} type="water" />
      </Layer2>
      <Layer1>
        <Element position={4} type="fire" />
        <Element position={3} type="earth" />
        <Element position={2} type="air" />
        <Element position={1} type="water" />
      </Layer1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  position: relative;
  outline: 1px solid white;
`

const Layer1 = styled.div`
  /* outline: 1px solid red; */
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: min(${SIZE / 1.618 / 1.618}vh, ${SIZE / 1.618 / 1.618}vw);
`

const Layer2 = styled.div`
  /* outline: 1px solid red; */
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: min(calc(${SIZE / 1.618}vh), calc(${SIZE / 1.618}vw));
`
const Layer3 = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: ${SIZE}%;
`
