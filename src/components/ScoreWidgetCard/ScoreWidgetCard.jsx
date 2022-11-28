import React, { useState, useEffect } from "react";
import BottomMatchInfo from "../BottomMatchInfo/BottomMatchInfo";
import MatchInfo from "../MatchInfo/MatchInfo";
// import TeamNames from "../TeamNames/TeamNames";
import TeamScoreBoard from "../TeamScoreBoard/TeamScoreBoard";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./ScoreWidgetCardStyle.css";
import Slider from "react-slick";
import TeamNamesNew from "../TeamNamesNew/TeamNamesNew";
import MatchSchedule from "../MatchBoardInfo/MatchSchedule";
import MatchToss from "../MatchBoardInfo/MatchToss";
import MatchResult from "../MatchBoardInfo/MatchResult";

export default function ScoreWidgetCard() {
  const [matchSchedule, setMatchSchedule] = useState(false);
  const [matchStarted, setMatchStarted] = useState(false);
  const [matchRunning, setMatchRunning] = useState(false);
  const [matchBreak, setMatchBreak] = useState(false);
  const [matchCompleted, setMatchCompleted] = useState(false);

  const [data, setData] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    button: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 7000,
  };

  const getData = () => {
    fetch("test.json",  {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData([myJson]);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const status = data && data.map((i) => i.match_info.match_status);
  const toss = data && data.map((i) => i.toss_info);

  useEffect(() => {
    if (status[0] === "notstarted" && toss[0] === undefined) {
      setMatchSchedule(true);
    }

    if (status[0] === "notstarted" && toss[0] !== undefined) {
      setMatchStarted(true);
    }

    if (status[0] === "started") {
      setMatchRunning(true);
    }

    if (status[0] === "completed") {
      setMatchCompleted(true);
    }
  }, [data.length > 0]);


  return (
    <>
      <div style={{ width: "350px", margin: "0 auto" }}>
        <Slider {...settings}>
          {data &&
            data.length > 0 &&
            data.map((i) => (
              <div className={`scoreboard ${i.id}`} key={i.id}>
                <div className="scoreboard__card">
                  <div className="scoreboard__card__content">
                    {/* <p>{i.match_info.match_status}</p> */}

                    <MatchInfo
                      matchSchedule={matchSchedule}
                      matchStarted={matchStarted}
                      matchRunning={matchRunning}
                      matchCompleted={matchCompleted}
                      data={data}
                      id={i.id}
                    />
                    <TeamNamesNew
                      matchSchedule={matchSchedule}
                      matchStarted={matchStarted}
                      matchRunning={matchRunning}
                      matchCompleted={matchCompleted}
                      data={data}
                      id={i.id}
                    />

                    {matchSchedule && i.toss_info === undefined ? (
                      <MatchSchedule
                        matchSchedule={matchSchedule}
                        data={data}
                        id={i.id}
                      />
                    ) : (
                      ""
                    )}
                    {matchStarted && i.toss_info !== undefined ? (
                      <MatchToss
                        matchStarted={matchStarted}
                        data={data}
                        id={i.id}
                      />
                    ) : (
                      ""
                    )}
                    {matchRunning ? (
                      <TeamScoreBoard
                        matchRunning={matchRunning}
                        // tossInfo={i.toss_info}
                        data={data}
                        id={i.id}
                      />
                    ) : (
                      ""
                    )}

                    {matchCompleted ? (
                      <MatchResult
                        matchCompleted={matchCompleted}
                        data={data}
                        id={i.id}
                      />
                    ) : (
                      ""
                    )}

                    {/* <TeamScoreBoard  matchStatus = {i.match_info.match_status} tossInfo={i.toss_info} data={data} id={i.id} /> */}
                  </div>

                  <div className="scoreboard__card__footer__content">
                    <BottomMatchInfo
                      /* matchSchedule={matchSchedule} */
                      matchRunning={matchRunning}
                      matchCompleted={matchCompleted}
                      data={data}
                    />
                    <WeatherInfo data={data} />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
