

const Button = ({ cliche, isActive, setIsActive }) => {

    const handleClick = () => {
        setIsActive(!isActive);
        setButtonsState(prevState => ({
    ...prevState,
    [buttonId]: !prevState[buttonId]
  }));
      };

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