import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [loading, setLoading]=useState(false);
  const [city, setCity]=useState(null);
  const [weather, setWeather]=useState(null);
  const cities=['paris', 'new york', 'tokyo', 'beijing'];

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{ 
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    }); 
  };

  const getWeatherByCurrentLocation = async(lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=36c7e8662756cdc79406a17b81f4940b&units=metric&lang=kr`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  

  const getWeatherByCity= async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36c7e8662756cdc79406a17b81f4940b&units=metric&lang=kr`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  useEffect(()=>{
    if(city == null){
      getCurrentLocation();
    } else getWeatherByCity();
  },[city]);

   const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading?
      <div className="container">
        <ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
         />
        </div>
      :
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} 
        handleCityChange={handleCityChange}
        selectedCity={city}
        />
      </div>}
    </div>
  );
}

export default App;
