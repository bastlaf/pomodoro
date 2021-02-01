/* eslint-disable react/button-has-type */
// eslint-disable-next-line unicorn/filename-case
import React, {useEffect} from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import audiofile from "../../audio1.mp3";
import audiofile2 from "../../audio.mp3";

momentDurationFormatSetup(moment);

const audioBreak = new Audio(audiofile);
const audioSession = new Audio(audiofile2);

const TimeLeft = ({
    breakLength,
    sessionLength,
    timerLabel,
    setTimerLabel,
    timeLeft,
    setTimeLeft,
}) => {
    useEffect(() => {
        if (timeLeft === 2 && timerLabel === "Session") {
            // play the audio
            audioBreak.play();
        } else if (timeLeft === 2 && timerLabel === "Break") {
            audioSession.play();
        }
        // if timeLeft is zero
        if (timeLeft === 0) {
            // change session to break or break to session
            if (timerLabel === "Session") {
                setTimerLabel("Break");
                setTimeLeft(breakLength);
            } else if (timerLabel === "Break") {
                setTimerLabel("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, timerLabel, sessionLength, timeLeft]);

    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    return (
        <div className={"boxTimer"}>
            <h2 className={"titleSelecteur"}>{timerLabel}</h2>
            <div className={"hour"}>{formattedTimeLeft}</div>
        </div>
    );
};

export default TimeLeft;

//il faut bloquer les boutons quand isStarted est true (remonter la fonction)
//ajouter la musique
//faire le style
