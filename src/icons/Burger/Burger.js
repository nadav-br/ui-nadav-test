import React, {useState} from 'react'
import burger from '../../assets/menu-24px.svg'
import './Burger.scss'
import Img from '../../icons/Image/Image'
function Burger() {

    const [isOpen, setIsOpen] = useState(false);
console.log(isOpen)
  const naveState = () => {
    if (!isOpen) {
      document.querySelector(".navbar").classList.add("resize");
      setIsOpen(true);
    } else {
      document.querySelector(".navbar").classList.remove("resize");
      setIsOpen(false);
    }
  };

    return (
        <div>
            <button onClick={naveState} className="openbtn">
                <Img className="burger-img" image={burger} />
            </button>
        </div>
    )
}

export default Burger
