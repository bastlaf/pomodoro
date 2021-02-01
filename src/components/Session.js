// eslint-disable-next-line unicorn/filename-case
import moment from "moment";
import React from "react";

const buttonPlusMinusStyle = {};
const buttonPlusMinusStyleDisabledButton = {
    backgroundColor: "#ffb3b3",
    cursor: "not-allowed",
};
const buttonPlusMinusStyleDisabledButton2 = {
    backgroundColor: "#cc0000",
    cursor: "not-allowed",
};
const buttonPlusMinusStyleDisabledButton3 = {
    backgroundColor: "#4d0000",
    cursor: "not-allowed",
    color: "white",
};

const Session = ({
    sessionLength,
    decrementSessionLength,
    incrementSessionLength,
    isStarted,
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes();

    return (
        <div className={"selecteurBox"}>
            <h2 className={"titleSelecteur"}>{"Session Time"}</h2>
            <div className={"session"}>
                <div
                    className={"sessionBtnMoinsCircle1"}
                    style={
                        isStarted
                            ? buttonPlusMinusStyleDisabledButton
                            : buttonPlusMinusStyle
                    }>
                    <div
                        className={"sessionBtnMoinsCircle2"}
                        style={
                            isStarted
                                ? buttonPlusMinusStyleDisabledButton2
                                : buttonPlusMinusStyle
                        }>
                        <button
                            type={"button"}
                            className={"sessionBtnMoinsCircle3"}
                            style={
                                isStarted
                                    ? buttonPlusMinusStyleDisabledButton3
                                    : buttonPlusMinusStyle
                            }
                            disabled={isStarted}
                            onClick={decrementSessionLength}>
                            {"-"}
                        </button>
                    </div>
                </div>

                <div className={"sessionNumberCircle1"}>
                    <div className={"sessionNumberCircle2"}>
                        <div
                            className={"breackNumberCircle3"}
                            id={"session-length"}>
                            {sessionLengthInMinutes}
                        </div>
                    </div>
                </div>

                <div
                    className={"sessionBtnPlusCircle1"}
                    style={
                        isStarted
                            ? buttonPlusMinusStyleDisabledButton
                            : buttonPlusMinusStyle
                    }>
                    <div
                        className={"sessionBtnPlusCircle2"}
                        style={
                            isStarted
                                ? buttonPlusMinusStyleDisabledButton2
                                : buttonPlusMinusStyle
                        }>
                        <button
                            type={"button"}
                            className={"sessionBtnPlusCircle3"}
                            style={
                                isStarted
                                    ? buttonPlusMinusStyleDisabledButton3
                                    : buttonPlusMinusStyle
                            }
                            disabled={isStarted}
                            onClick={incrementSessionLength}>
                            {"+"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Session;
