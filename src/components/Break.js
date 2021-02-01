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

const Break = ({
    breakLength,
    decrementBreakLength,
    incrementBreakLength,
    isStarted,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();

    return (
        <div className={"selecteurBox"}>
            <h2 className={"titleSelecteur"}>{"Break Time"}</h2>
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
                            onClick={decrementBreakLength}>
                            {"-"}
                        </button>
                    </div>
                </div>

                <div className={"sessionNumberCircle1"}>
                    <div className={"sessionNumberCircle2"}>
                        <div
                            className={"breackNumberCircle3"}
                            id={"break-length"}>
                            {breakLengthInMinutes}
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
                            onClick={incrementBreakLength}>
                            {"+"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Break;
