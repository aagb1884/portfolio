import { useState } from 'react'

const Button = ({ cliche }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className="grid-item">
            <button
                onClick={() => setIsActive(isActive ? false : true)}
                style={{
                    background: isActive ? '#231557' : '#ff1361',
                    color: isActive ? 'whitesmoke' : 'black'
                }}
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