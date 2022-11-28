import React from "react";
import "./MatchInfoStyle.css";
// import logo from '../../logo.svg';
import location from "../../icons/location.svg";

export default function MatchInfo(props) {
  const data = props.data;

  const getDate = data && data.length > 0 && data.map((i) => i.start_date);
  let changeFormat;
  if (getDate !== undefined) {
    changeFormat = new Date(getDate).toString().split(" ");
  }

  return (
    <div className={`scoreboard__matchInfo ${props.id}`} style={{color: props.matchRunning ? "#603a97" : "#383838"}}>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <>
            {props.matchSchedule ||
            props.matchStarted  ||
            props.matchCompleted  ? (
              <>
                <span className="scoreboard__matchInfo__title" key={item.id}>
                  {" "}
                  {item.match_info.league_title}
                </span>
                <div
                  className="scoreboard__matchInfo__detailSection"
                >
                  <span className="scoreboard__matchInfo__date">
                    {item.start_date ? changeFormat[1] : ""}{" "}
                    {item.start_date ? changeFormat[2] : ""}
                  </span>
                  <div className="scoreboard__matchInfo__address">
                    <img
                      src={location}
                      className="scoreboard__matchInfo__location__img"
                      alt="logo"
                    />
                    <span className="scoreboard__matchInfo__location">
                      {item.match_info.venue}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {props.matchRunning  ? (
              <span className="scoreboard__matchInfo__commentary__title">
                {item.commentary}
              </span>
            ) : (
              ""
            )}

            {props.matchBreak ? (
              <span className="scoreboard__matchInfo__title">
                First Innings Match Highlights
              </span>
            ) : (
              ""
            )}
          </>
        ))}
    </div>
  );
}
