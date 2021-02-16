import React, {useState} from 'react'
import burger from '../../assets/menu-24px.svg'

function Burger() {

    const [isOpen, setIsOpen] = useState(false);

  const naveState = () => {
    if (!isOpen) {
      document.querySelector(".app").style.marginLeft = "-21.5vw";
      setIsOpen(true);
    } else {
      document.querySelector(".app").style.marginLeft = "0px";
      setIsOpen(false);
    }
  };

    return (
        <div>
            <button onClick={naveState} className="openbtn">
                <img className="burger-img" src={burger} />
            </button>
        </div>
    )
}

export default Burger
