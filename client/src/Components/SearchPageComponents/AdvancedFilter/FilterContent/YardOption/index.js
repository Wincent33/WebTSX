import React from 'react'
import Switch from "react-switch"
import "./style.scss"

 const YardOption = (props) =>  {
    const {isYard, setIsYard} = props
  
    const handleChange = (checked) => {
      setIsYard(checked);
    }
      return (
        <div className="yard-container">
          <div className="yard-text">Yard?</div>
          <div className="yard-toggle">
            <Switch
              onChange={handleChange}
              checked={isYard}
            />
          </div>
        </div>
      );
    }
  export default YardOption