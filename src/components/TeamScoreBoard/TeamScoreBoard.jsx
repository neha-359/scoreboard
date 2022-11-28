import React from "react";
import "./TeamScoreBoardStyle.css";
// import Countdown, { zeroPad } from "react-countdown";

export default function TeamScoreBoard(props) {
  const data = props.data;

  return (
    <div className={`scoreboard__teamscoreboard ${props.id}`}>
      {data &&
        data.length > 0 &&
        data.map((i) => (
          <>
            {props.matchRunning ? (
              <>
                <div className="scoreboard__teamscoreboard__scores">
                  <div className="scoreboard__teamscoreboard__batsman">
                    <div className="scoreboard__teamscoreboard__batsman__info scoreboard__teamscoreboard__batsman__info--bating">
                      <p className="scoreboard__teamscoreboard__player__name">
                        {i.batsman}
                      </p>
                      <p className="scoreboard__teamscoreboard__player__score">
                        {i.batsman_runs}({i.batsman_balls_faced})
                      </p>
                    </div>

                    <div className="scoreboard__teamscoreboard__batsman__info">
                      <p className="scoreboard__teamscoreboard__player__name">
                        {i.non_striker}
                      </p>
                      <p className="scoreboard__teamscoreboard__player__score">
                        {i.nonstriker_runs}({i.nonstriker_balls_faced})
                      </p>
                    </div>

                    <div className="scoreboard__teamscoreboard__batsman__info">
                      <p className="scoreboard__teamscoreboard__player__CRR">
                        CRR
                      </p>
                      <p className="scoreboard__teamscoreboard__player__CRRScore">
                        {i.crr}
                      </p>
                    </div>
                  </div>

                  <div className="scoreboard__teamscoreboard__bowler">
                    <div className="scoreboard__teamscoreboard__bowler__info ">
                      <p className="scoreboard__teamscoreboard__player__name scoreboard__teamscoreboard__player__name--bowler">
                        {i.bowler}
                      </p>
                      <p className="scoreboard__teamscoreboard__player__bowlerscore">
                        {i.bowler_total_runs}-{i.bowler_total_wickets}
                        {/* 0-2{" "} */}
                        <span className="scoreboard__teamscoreboard__player__bowlerscore__avg">
                          {i.bowler_total_overs}
                        </span>
                      </p>
                    </div>


                    <ul
                      id="myUL"
                      className="scoreboard__teamscoreboard__bowler__info__scoreBoard"
                    >
                      {i.recent_overs_str[1].map((list) => (
                        <li
                          className={`scoreboard__teamscoreboard__bowler__score ${
                            list !== ""
                              ? "scoreboard__teamscoreboard__bowler--completed"
                              : ""
                          } ${
                            list.startsWith("w")
                              ? "scoreboard__teamscoreboard__bowler--wicket"
                              : ""
                          }`}
                        >
                          {list.startsWith("w")  
                            ? 
                            list.length === 1 ? list : 
                            <>
                            <p className={`score__wd ${ list.startsWith("w") ? "scoreboard__teamscoreboard__bowler--wicket" : "" }`}>{list.split(";")[0]}</p>
                            <p className="score__wd ">{list.replace(/e1/g, 1).replace(/,/g, "").split(';')[1]}</p>
                            </>
                            
                            
                            : 
                            list.substring(1).length > 1 ? 
                            
                            <>
                              <p className={`score__wd ${ list.startsWith("w") ? "scoreboard__teamscoreboard__bowler--wicket" : "" }`}>
                                {list.includes("e1")
                                  ? list
                                      .substring(1)
                                      .replace(/;/g, "")
                                      .replace(/e1/g, 1)
                                      .split(/[,]+/)[0].length > 1
                                    ? Number(
                                        list
                                          .substring(1)
                                          .replace(/;/g, "")
                                          .replace(/e1/g, "")
                                          .split(/[,]+/)[0]
                                      ) +
                                      Number(
                                        list
                                          .substring(1)
                                          .replace(/;/g, "")
                                          .replace(/e1/g, "1")
                                          .split(/[,]+/)[0]
                                          .substring(1)
                                      )
                                    : list
                                        .substring(1)
                                        .replace(/;/g, "")
                                        .replace(/e1/g, 1)
                                        .split(/[,]+/)[0]
                                  : list
                                      .substring(1)
                                      // .replace(/;/g, "")
                                      .split(/[,]+/)[0]
                                      .split(";")[0]}
                              </p>

                              <p className={`score__wd ${list.length > 3 && list.includes("w") ? "scoreboard__teamscoreboard__bowler--wicket" : "" }` }>
                                {list.includes(";")
                                  ? list
                                      .substring(1)
                                      .replace(/e1,/g, "")
                                      .split(/[;]+/)[1]
                                  : list.substring(1).split(/[,]+/)[1]}
                                  {/* // .split(/[,]+/)[1]} */}
                              </p>
                            </>

                            :
                            list.length === 1 ? list : list.substring(1)
                            
                            }
                        </li>
                      ))}
                    </ul>

                    {/* <div className="scoreboard__teamscoreboard__bowler__info__scoreBoard"> */}
                    {/* <ul
                      id="myUL"
                      className="scoreboard__teamscoreboard__bowler__info__scoreBoard"
                    >
                      {i.recent_overs_str[1].map((list) => (
                        <li
                          className={`scoreboard__teamscoreboard__bowler__score ${
                            list !== ""
                              ? "scoreboard__teamscoreboard__bowler--completed"
                              : ""
                          } ${
                            list.startsWith("w")
                              ? "scoreboard__teamscoreboard__bowler--wicket"
                              : ""
                          }`}
                        >
                         
                          {list.substring(1).length > 1 ? (
                            <>
                              <p className="score__wd">
                                {list.includes("e1")
                                  ? list
                                      .substring(1)
                                      .replace(/;/g, "")
                                      .replace(/e1/g, 1)
                                      .split(/[,]+/)[0].length > 1
                                    ? Number(
                                        list
                                          .substring(1)
                                          .replace(/;/g, "")
                                          .replace(/e1/g, "")
                                          .split(/[,]+/)[0]
                                      ) +
                                      Number(
                                        list
                                          .substring(1)
                                          .replace(/;/g, "")
                                          .replace(/e1/g, "1")
                                          .split(/[,]+/)[0]
                                          .substring(1)
                                      )
                                    : list
                                        .substring(1)
                                        .replace(/;/g, "")
                                        .replace(/e1/g, 1)
                                        .split(/[,]+/)[0]
                                  : list
                                      .substring(1)
                                      // .replace(/;/g, "")
                                      .split(/[,]+/)[0]
                                      .split(";")[0]}
                              </p>

                              <p className="score__wd">
                                {list.includes(";")
                                  ? list
                                      .substring(1)
                                      .replace(/e1,/g, "")
                                      .split(/[;]+/)[1]
                                  : list.substring(1).split(/[,]+/)[1]}
                              </p>
                            </>
                          ) : list.length === 1 ? (
                            list
                          ) : (
                            list.substring(1)
                          )}
                        </li>
                      ))}
                    </ul> */}

                    {/* {i.recent_overs_str[1].map((list) => (  */}
                    <div
                      className="scoreboard__teamscoreboard__bowler__speedSection"
                      style={{
                        margin:
                          i.recent_overs_str[1].length <= 6 ? "4px 0" : "2px 0",
                      }}
                    >
                      <p className="scoreboard__teamscoreboard__bowler__speedSection__speed">
                        130.9 KM/H
                      </p>
                    </div>
                    {/* ))} */}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {props.matchBreak === true ? (
              <div className="scoreboard__teamscoreboard_breakTime">
                <p className="scoreboard__teamscoreboard_breakTime_title">
                  RCB to resume batting in
                </p>
                <p className="scoreboard__teamscoreboard_breakTime_timezone">
                  35:14
                  <span className="scoreboard__teamscoreboard_breakTime_title">
                    m
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </>
          //mapping close
        ))}
    </div>
  );
}
