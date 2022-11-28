import React from 'react';
import "./TeamScoreBoardStyle.css";


export default function MatchToss(props) {
    const data = props.data;

  return (
    <div className={`scoreboard__teamscoreboard ${props.id}`}>
      {data &&
        data.length > 0 &&
        data.map((i) => (
          <>
      {props.matchStarted === true ||
            (props.matchStatus === "notstarted" &&
              i.toss_info !== undefined) ? (
              <>
                <div className="scoreboard__teamscoreboard__matchStarted">
                  <p className="scoreboard__teamscoreboard__matchStarted_title">
                    Toss won by{" "}
                    {i.toss_info ? i.toss_info.toss_winner_code : ""}
                  </p>
                  <span className="scoreboard__teamscoreboard__matchStarted_subtitle">
                    {i.toss_info ? i.toss_info.decision : ""}
                  </span>
                </div>
              </>
            ) : (
              ""
            )}
      </>
          //mapping close
        ))}
    </div>
  )
}
