import React from 'react'
import './WeatherInfoStyle.css';

export default function WeatherInfo(props) {

  const data = props.data;

  return (
    <>
    {data &&  data.length > 0 && data.map((i)=>
    
    i.weather_info && Object.keys(i.weather_info).length > 1 ?
      <div className='scoreboard__watherInfo' key={i.id}>
      <div className='scroboard__watherInfo__list'>
        <img src="/sun.png" alt="sun" />
        <p className='scroboard__watherInfo__list__name'>{i.weather_info.temperature ? i.weather_info.temperature.toString().substring(0, i.weather_info.temperature.toString().length - 1) : ""} <span className='scroboard__watherInfo__list__suntemp'>{i.weather_info.temperature ? i.weather_info.temperature.toString().charAt(i.weather_info.temperature.length-1): ""}</span></p>

        {/* <p className='scroboard__watherInfo__list__name'>{Object.keys(i.weather_info).length > 1 ? i.weather_info.temperature.toString().substring(0, i.weather_info.temperature.toString().length - 1) : ""} <span className='scroboard__watherInfo__list__suntemp'>{i.weather_info.length > 1 ? i.weather_info.temperature.toString().charAt(i.weather_info.temperature.length-1) : ""}</span></p> */}
      </div>
      <div className='scroboard__watherInfo__list'>
        <img src="/water.png" alt="water" />
        <p className='scroboard__watherInfo__list__temp'>{i.weather_info.humidity ? i.weather_info.humidity : "" }</p>
      </div>

      <div className='scroboard__watherInfo__list'>
        <img src="/air.png" alt='air' />
        <p className='scroboard__watherInfo__list__temp'>{ i.weather_info.rain ? i.weather_info.rain :""}</p>
      </div>

      <div className='scroboard__watherInfo__list'>
        <img src="/umbrella.png" alt='umbrella' />
        <p className='scroboard__watherInfo__list__temp'>{i.weather_info.rain ? i.weather_info.rain : ""}</p>
      </div>

      <div className='scroboard__watherInfo__list'>
        <img src="/location.png" alt='location' />
      </div>

    </div>
    : "" 
      )}
    </>
  )
}
