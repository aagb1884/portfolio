const Button = ({ cliche, isActive, setIsActive, numberOfActiveButtons, setNumberOfActiveButtons, checkIfBingoButtonIsActive}) => {

    const handleClick = () => {
        setIsActive(!isActive);
        addActiveButtons();
        checkIfBingoButtonIsActive();
        console.log(numberOfActiveButtons)
      };

    const addActiveButtons = () => {
      if (!isActive && numberOfActiveButtons < 5) {
        setNumberOfActiveButtons(numberOfActiveButtons + 1)
      } 
      else {setNumberOfActiveButtons(0)}
    }

    return (
        <div className={`grid-item ${isActive ? 'active' : ''}`}>
        <button
          onClick={handleClick}
          className="euro-btn"
          type="button"
          data-testid="card-button"
        >
          {cliche}
        </button>
      </div>

    );
}

export default Button;