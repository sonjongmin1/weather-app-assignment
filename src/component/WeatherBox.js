import React from 'react'

//Es6문법 Destructuring 오브젝트가 있을때 내가 갖고싶은 내용의 키만 언급을하면 가져 올 수 있다.
const WeatherBox = ({weather}) => {
  

  return (
    <div className='weather-box'> 
        <div>{weather?.name}</div> 
        <h2>{weather?.main.temp.toFixed(1)}°C / {((weather?.main.temp * 9/5) +32).toFixed(1)}°F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
