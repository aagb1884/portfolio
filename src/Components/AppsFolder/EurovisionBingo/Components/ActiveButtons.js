import './cliche.css'
import Button from './Button'
import styled from 'styled-components'

function ActiveButtons({ cardArray }) {

  const buttons = cardArray.map((clicheStr, index) => {
    return <Button cliche={clicheStr} key={index} />
  })

  return (
    <Wrapper>
      {buttons}
    </Wrapper>
  )

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: true;
  margin: 20px;
`

export default ActiveButtons