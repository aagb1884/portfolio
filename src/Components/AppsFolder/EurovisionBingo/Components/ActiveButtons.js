import './cliche.css'
import Button from './Button'


function ActiveButtons({ cardArray, isActive, setIsActive }) {


  const toggleButton = (cliche) => {
    setIsActive(prevState => ({
      ...prevState,
      [cliche]: !prevState[cliche]
    }));
  };

  const buttons = cardArray.map((cliche, index) => {
      return (
        <Button
          key={index}
          cliche={cliche}
          isActive={isActive[cliche] || false}
          setIsActive={() => toggleButton(cliche)}
        />
      );
    });


  return (
    <div className='active-buttons-wrapper'>
      {buttons}
    </div>
  )

}



export default ActiveButtons