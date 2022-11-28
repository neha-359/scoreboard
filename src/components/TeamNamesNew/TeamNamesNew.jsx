import React from "react";
import "./TeamNamesNewStyle.css";

export default function TeamNamesNew(props) {
  const data = props.data;
  console.log("schedule=", props.matchStarted);

  const getScore = data.map((i) => i.team_scores);
  let allscore;
  let battingTeamScore;
  let bowlingTeamScore;
  let battingTeamName;
  let bowlingTeamName;

  if (props.matchCompleted) {
    battingTeamName = data && data.map((i) => i.result_info.winning_team_code);
    bowlingTeamName = data && data.map((i) => i.result_info.losing_team_code);

    allscore = getScore[0];
    battingTeamScore = allscore[0];
    bowlingTeamScore = allscore[1];
    
  }

  if (props.matchRunning ) {
    battingTeamName = data && data.map((i) => i.match_info.team_codes[0]);
    bowlingTeamName = data && data.map((i) => i.match_info.team_codes[1]);

    allscore = getScore[0];
    battingTeamScore = allscore[0];
    bowlingTeamScore = allscore[1];

    console.log("getScore",battingTeamScore[battingTeamName].score)
    
  }

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((i) => (
          <div
            key={i.id}
            className={`scoreboard__teamName ${
              props.matchSchedule ||
              props.matchStarted  ||
              props.matchCompleted 
                ? "scoreboard__teamName--activeTeam"
                : ""
            } ${
              props.matchRunning ||
              props.matchBreak === true
                ? "scoreboard__teamName--relative"
                : ""
            }`}
          >
            <div
              className={`scoreboard__teamNames__teamA ${
                props.matchSchedule ||
                props.matchStarted 
                  ? "scoreboard__teamNames--center"
                  : "scoreboard__teamNames--spaceBetween"
              } 
        ${
          props.matchRunning 
            ? "scoreboard__teamNames__teamA--batting "
            : ""
        } ${
                props.matchBreak === true
                  ? "scoreboard__teamNames__teamA--bowling"
                  : ""
              } `}
            >
              <p
                className={`scoreboard__teamNames__PlayerName scoreboard__teamNames__PlayerName--activename ${
                  props.matchBreak === true
                    ? "scoreboard__teamNames__PlayerName--bowling"
                    : ""
                }`}
              >
                {props.matchSchedule || props.matchStarted
                  ? i.toss_info !== undefined
                    ? i.toss_info.toss_winner_code
                    : i.match_info.team_codes[0]
                  : ""}

                {props.matchCompleted
                  ? i.result_info.winning_team_code
                  : ""}
                    {props.matchRunning ?
                  battingTeamScore[battingTeamName].innings_status === "ongoing" ? battingTeamName : bowlingTeamName
                  : ""}
                {/* {props.matchStatus === "started" ? i.match_info.team_codes[0] : ""} */}
              </p>

              {props.matchRunning ||
              props.matchBreak === true ||
              props.matchCompleted ? (
                <>
                {props.matchCompleted || props.matchRunning && battingTeamScore[battingTeamName].innings_status === "ongoing" ?
                <p
                  className={`scoreboard__teamNames__scoreCount ${
                    props.matchBreak === true
                      ? "scoreboard__teamNames__PlayerName--bowling"
                      : ""
                  }`}
                >
                  {props.matchCompleted ? battingTeamScore[battingTeamName].score : ""}
                  {props.matchRunning && battingTeamScore[battingTeamName].innings_status === "ongoing" ? battingTeamScore[battingTeamName].score : ""}
                  {/* {props.matchStatus === "complted" ? i.team_scores[0].RR.score : ""} */}
                  {/* {battingTeamScore[battingTeamName].score
                    ? battingTeamScore[battingTeamName].score
                    : battingTeamScore[battingTeamName].innings_status} */}
                  /
                  {props.matchCompleted ? battingTeamScore[battingTeamName].wickets : ""}
                  {props.matchRunning && battingTeamScore[battingTeamName].innings_status === "ongoing" ?  battingTeamScore[battingTeamName].wickets : ""}

                  {/* {battingTeamScore[battingTeamName].wickets
                    ? battingTeamScore[battingTeamName].wickets
                    : ""} */}
                  <p
                    className={`scoreboard__teamNames__overCount ${
                      props.matchBreak === true
                        ? "scoreboard__teamNames__PlayerName--bowling "
                        : ""
                    }`}
                  >
                  {props.matchCompleted ? battingTeamScore[battingTeamName].overs : ""}
                  
                  {props.matchRunning && battingTeamScore[battingTeamName].innings_status === "ongoing" ?  battingTeamScore[battingTeamName].overs : ""}

                    {/* {battingTeamScore[battingTeamName].overs
                      ? battingTeamScore[battingTeamScore].overs
                      : ""}{" "} */}
                    ov
                  </p>
                </p>
                :
                <p
                  className={`scoreboard__teamNames__remainsBatting ${
                    props.matchBreak === true || props.matchRunning ? "--batting" : ""
                  }`}
                >
                  { battingTeamScore[battingTeamName].innings_status === "yettobat" ? "Yet to Bat" : ""}
                </p>

              }
                </>
              ) : (
                ""
              )}
            </div>

            {props.matchSchedule ||
            props.matchStarted  ||
            props.matchCompleted  ? (
              <p className="scoreboard__teamName__versus">vs</p>
            ) : (
              ""
            )}

            <div
              className={`scoreboard__teamNames__teamB ${
                props.matchSchedule || props.matchStarted 
                  ? "scoreboard__teamNames--center"
                  : "scoreboard__teamNames--spaceBetween"
              } ${
                props.matchRunning
                  ? "scoreboard__teamNames__teamB--bowling"
                  : ""
              } ${
                props.matchBreak === true
                  ? "scoreboard__teamNames__teamB--batting "
                  : ""
              }`}
            >
              {/* <div className="scoreboard__teamNames__teamB" style={{justifyContent: props.matchSchedule === true || props.matchStarted === true || props.matchCompleted === true ? "center" : "space-between"}}> */}
              <p
                className={`scoreboard__teamNames__PlayerName ${
                  props.matchRunning 
                    ? "scoreboard__teamNames__PlayerName--bowling"
                    : ""
                }`}
              >
                {props.matchSchedule || props.matchStarted
                // props.matchStatus === "started"
                  ? i.toss_info !== undefined
                    ? i.toss_info.toss_loser_code
                    : i.match_info.team_codes[1]
                  : ""}

                {props.matchCompleted
                  ? i.result_info.losing_team_code
                  : ""}
                  {props.matchRunning ? bowlingTeamScore[bowlingTeamName].innings_status === "yettobat" ? bowlingTeamName : battingTeamName
                  : ""}
              </p>

              {/* score */}
              {props.matchCompleted || props.matchRunning ? (
<>
                {props.matchCompleted || props.matchRunning && bowlingTeamScore[bowlingTeamName].innings_status === "ongoing" ?

                <p
                  className={`scoreboard__teamNames__scoreCount ${
                    props.matchBreak === true || props.matchRunning
                      ? "scoreboard__teamNames__PlayerName--bowling"
                      : ""
                  }`}
                >
                  {props.matchCompleted ? bowlingTeamScore[bowlingTeamName].score : ""}
                  {props.matchRunning && bowlingTeamScore[bowlingTeamName].innings_status === "ongoing" ? bowlingTeamScore[bowlingTeamName].score : ""}
                  
                  /
                  {props.matchCompleted ? bowlingTeamScore[bowlingTeamName].wickets : ""}
                  {props.matchRunning && bowlingTeamScore[bowlingTeamName].innings_status === "ongoing" ? bowlingTeamScore[bowlingTeamName].wickets : ""}


                  {/* {bowlingTeamScore[bowlingTeamName].wickets ? bowlingTeamScore[bowlingTeamName].wickets : ""} */}
                  <p
                    className={`scoreboard__teamNames__overCount ${
                      props.matchBreak === true || props.matchRunning
                        ? "scoreboard__teamNames__PlayerName--bowling "
                        : ""
                    }`}
                  >
                  {props.matchCompleted ? bowlingTeamScore[bowlingTeamName].overs : ""}

                    {/* {bowlingTeamScore[bowlingTeamName].overs ? bowlingTeamScore[bowlingTeamName].overs : ""}  */}
                  {props.matchRunning && bowlingTeamScore[bowlingTeamName].innings_status === "ongoing" ? bowlingTeamScore[bowlingTeamName].overs : ""} 
                  ov
                   
                  </p>
                </p>
                : 
                
                <p
                  className={`scoreboard__teamNames__remainsBatting ${
                    props.matchBreak === true ? "--batting" : ""
                  }`}
                >

                  {props.matchRunning && bowlingTeamScore[bowlingTeamName].innings_status === "yettobat" ? "Yet to bet" : ""}
                  {/* Yet to Bat */}
                </p>
                }
                </>

              ) : (
                ""
              )}

              {/* {props.matchRunning === true ||
              props.matchStatus === "started" ||
              props.matchBreak === true ? (
                <p
                  className={`scoreboard__teamNames__remainsBatting ${
                    props.matchBreak === true ? "--batting" : ""
                  }`}
                >
                  {bowlingTeamScore[bowlingTeamName].innings_status === "yet to bet" ? bowlingTeamScore[bowlingTeamName].innings_status : ""}
                  
                </p>
              ) : (
                ""
              )} */}
            </div>
          </div>
        ))}
    </>
  );
}
