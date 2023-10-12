import './cliche.css'
import Button from './Button'


function ActiveButtons({ cardArray }) {

  const buttons = cardArray.map((clicheStr, index) => {
    return <Button cliche={clicheStr} key={index} />
  })

  return (
    <div className='active-buttons-wrapper'>
      {buttons}
    </div>
  )

}



export default ActiveButtons