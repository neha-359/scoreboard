import { SportsGymnastics } from '@mui/icons-material'
import React from 'react'
import './BottomMatchInfoStyle.css'
import location from "../../icons/location.svg";

export default function BottomMatchInfo(props) {
  const data = props.data
  return (
    <>
    {props.matchRunning || props.matchCompleted  ? 
    <>
    {data && data.length > 0 && data.map((i)=>
    <div className='scoreboard__bottomMatchInfo' key={i.id}>
      <p className='scoreboard__bottomMatchInfo__name'>{i.match_info.league_title}</p>
      <span className='scoreboard__bottomMatchInfo--rightBorder'></span>
      <p className='scoreboard__bottomMatchInfo__date'>March 9</p>
      <span className='scoreboard__bottomMatchInfo--rightBorder'></span>
      <div className='scoreboard__bottomMatchInfo__venueContent'>
      <img  src={location} />
      <p className='scoreboard__bottomMatchInfo__address'>{i.match_info.venue}</p>
      </div>
      
      <img src='/weather.png' className='scoreboard__bottomMatchInfo__weatherLogo'  />
    </div>
    )}
    </>
    : ""
    }
    </>
  )
}
