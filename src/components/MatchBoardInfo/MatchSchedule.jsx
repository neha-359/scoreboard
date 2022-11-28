import React from "react";
import Countdown from "react-countdown-simple";
import "./TeamScoreBoardStyle.css";

export default function MatchSchedule(props) {

  const data = props.data;

  const getDate =
    data &&
    data.length > 0 &&
    data.map((i) => {
      if (i.start_date) {
        return i.start_date;
      }
    });

  let changeFormat;
  let timeFormat;
  let getTimeZone;

  if (getDate !== undefined) {
    changeFormat = new Date(getDate).toString().split(" ");

    timeFormat = new Date(getDate)
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    if (props.matchSchedule && props.tossInfo === undefined) {
      getTimeZone = changeFormat[5].split("+");
    }
  }

  return (
    <div className={`scoreboard__teamscoreboard ${props.id}`}>
      {data &&
        data.length > 0 &&
        data.map((i) => (
          <>
            {i.toss_info === undefined ? (
              <>
                <div className="scoreboard__teamscoreboard__countdown" key={i.id}>
                  <span className="scoreboard__teamscoreboard__title">
                    {i.commentary}
                    {/* Match to Begin */}
                  </span>
                  {/* <p className="scoreboard__teamscoreboard__subTitle">17 : 00 : 00</p> */}
                  <div>
                    <Countdown
                      targetDate={new Date(i.start_date)}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <p className="scoreboard__teamscoreboard__subTitle">
                          {hours} : {minutes} : {seconds}
                        </p>
                      )}
                    />
                  </div>
                </div>

                <div className="scoreboard__teamscoreboard__timeContent" >
                  <span className="scoreboard__teamscoreboard__date">
                    {changeFormat ? changeFormat[1] : ""}{" "}
                    {changeFormat ? changeFormat[2] : ""}
                    {/* Febuary 2 */}
                  </span>
                  <span className="scoreboard__teamscoreboard__timezone">
                    {timeFormat ? timeFormat : ""}{" "}
                    {getTimeZone ? getTimeZone[0] : ""}
                    {/* 6:30 PM GMT */}
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
  );
}
