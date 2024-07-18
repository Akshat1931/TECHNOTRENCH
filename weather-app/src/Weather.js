import React,{useState} from 'react';
import Axios from "axios";
import './Weather.css';


const key='464150cec523b959b59dd23445044c56';

const Weather = () => {

    const[city,setCity]=useState("");
    const[data,setData]=useState();
        
   
 
    const fetchData = async () =>{
        try{
        const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        setData(response.data);
        }
        
        catch(err){
        alert('Please Enter the City Name correctly ! ');
        }
    }

  return (
    <div className='App'>

    <h1 className='title'>Weather App</h1>
        <div className='input-container'>
            <input type='text' className='input' value={city} onChange={e=>setCity(e.target.value)}
            placeholder='Enter the City Name '>
            </input>
            <button className='button' onClick={fetchData}>Fetch Data</button>
        </div>
      

        <div>
            {data && (
            <div className='container'>
                    <div className='weather-info'>
                        <h1 className='weather-title'>Today's Weather condition : </h1>
                        <h2 className='weather-desc'>{data.weather[0].description}</h2>
                        <div className='temp'>
                            The temperature in {data.name} is {Math.round(data.main.temp - 273.15)}ºC  ({Math.round(data.main.temp)}ºF)
                        </div>
                    </div>
                    
            </div>
            )}
        </div>

    </div>
  )
}

export default Weather;




 // function fahrenheitToCelsius(fahrenheit) 
    // {
    //     return ((fahrenheit - 32) * 5) / 9;
    // }

    /* The temperature in {data.name} is {Math.round(data.main.temp)}ºF */
                        /* The temperature in {data.name} is{' '}
                {Math.round(data.main.temp)}ºF  ({273.15-fahrenheitToCelsius(data.main.temp).toFixed(2)}ºC) */