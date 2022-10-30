import React from "react"
import Select from "react-select"
import "./style.scss"

 const ZonaInteraksi=(props)=>{
    const {selectedOption, setSelectedOptions}= props
    
    const zonaOptions = [
        { value: "kota", label: "Pusat Kota" },
        { value: "suburban", label: "Suburban" },
        { value: "suburban-fringe", label: "Suburban Fringe" },
        { value: "urban-fringe", label: "Urban Fringe" },
        { value: "rural-urban-fringe", label: "Rural Urban Fringe" },
        { value: "kitchen", label: "Rural" },
      ];
      const handleChange = (e) => setSelectedOptions(e);
    return (
        <div className="zona-interaksi-container">
            <h3>Zona Interaksi Desa / Kota</h3>
            <Select 
            options={zonaOptions} 
            onChange={handleChange} 
            placeholder= "Pilih salah satu"
            isClearable={true}
            value={selectedOption}/>
            
        </div>
    )
}
export default ZonaInteraksi