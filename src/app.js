import React, {useState, useEffect} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import moment from "moment";
import "./scss/app.scss";

function App() {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const [IntervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const formattedTitleTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false});

    useEffect(() => {
        document.title = `${formattedTitleTimeLeft} | ${currentSessionType} - Pomodoro App`;
    }, [formattedTitleTimeLeft]);

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength < 60) {
            setBreakLength(60);
        } else {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLength = () => {
        if (breakLength >= 60 * 59) {
            setBreakLength(60 * 59);
        } else {
            setBreakLength(breakLength + 60);
        }
    };

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 60) {
            setSessionLength(60);
        } else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLength = () => {
        if (sessionLength >= 60 * 59) {
            setSessionLength(60 * 59);
        } else {
            setSessionLength(sessionLength + 60);
        }
    };

    const isStarted = IntervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
            //stop decrementation
            clearInterval(IntervalId);
            setIntervalId(null);
        } else {
            //decrement time left by one every second (1000ms)
            const newIntervalId = setInterval(() => {
                setTimeLeft(previousTimeLeft => previousTimeLeft - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        clearInterval(IntervalId);
        setIntervalId(null);
        setCurrentSessionType("Session");
        setSessionLength(60 * 25);
        setBreakLength(300);
        setTimeLeft(25 * 60);
    };

    return (
        <div className={"App"}>
            <h1>{"Pomodoro"}</h1>
            <div className={"btnSelecteur"}>
                <Session
                    sessionLength={sessionLength}
                    decrementSessionLength={decrementSessionLength}
                    incrementSessionLength={incrementSessionLength}
                    isStarted={isStarted}
                />
                <Break
                    breakLength={breakLength}
                    decrementBreakLength={decrementBreakLength}
                    incrementBreakLength={incrementBreakLength}
                    isStarted={isStarted}
                />
            </div>
            <TimeLeft
                breakLength={breakLength}
                timerLabel={currentSessionType}
                setTimerLabel={setCurrentSessionType}
                sessionLength={sessionLength}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
            />
            <div className={"btnPlayAndReset"}>
                <div className={"play1"}>
                    <div className={"play2"}>
                        <button
                            type={"button"}
                            className={"play3"}
                            onClick={handleStartStopClick}>
                            {isStarted ? "PAUSE" : "PLAY"}
                        </button>
                    </div>
                </div>
                <div className={"reset1"}>
                    <div className={"reset2"}>
                        <button
                            type={"button"}
                            className={"reset3"}
                            onClick={handleResetButtonClick}>
                            {"RESET"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
