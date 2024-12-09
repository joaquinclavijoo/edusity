import React from 'react'
import "./Campus.css"
import campus1 from "../../assets/campus1.jpg";
import campus2 from "../../assets/campus2.jpg";
import campus5 from"../../assets/campus5.jpg";
import campus6 from "../../assets/campus6.jpg";


const Campus = () => {
  return (
    <div className='campus'>
        <div className="galeria">
            <img src={campus1}  alt='' />
            <img src={campus2}  alt='' />
            <img src={campus5}  alt='' />
            <img src={campus6}  alt='' />
            
        </div>
        <button className='btn dark-btn'> Vér Más Aquí <img src='' alt='' /> </button>
    </div>
  )
}

export default Campus