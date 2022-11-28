import React from 'react';
import "./TeamScoreBoardStyle.css";


export default function MatchResult(props) {

    const data = props.data;

  return (
    <div className={`scoreboard__teamscoreboard ${props.id}`}>
    {data &&
      data.length > 0 &&
      data.map((i) => (
        <>
       {props.matchCompleted ? (
              <div className="scoreboard__teamscoreboard__completed">
                <p className="scoreboard__teamscoreboard__completed__title">
                  {/* CSK won by 2 Runs */}
                  {i.result_info.result_desc}
                </p>
              </div>
            ) : (
              ""
            )}
      </>
          //mapping close
        ))}
    </div>
  )
}
