import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
    
  return (
    <div>
    <Button  
    variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
    onClick={()=> handleCityChange("current")}>Current location</Button> 

    {cities.map((city)=>(
      <Button  
      variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
      onClick={()=>handleCityChange(city)}
      >
      {city}
      </Button>
    ))}
    </div>
  )
}

export default WeatherButton
