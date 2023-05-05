import React from "react";
import DayTitle from "./daytitles"
import DayWrapper from "./dayswrapper"


export default function Weeks(props) {
    const renderCalendarBox = () => {
        const calendarBoxArray = []

        for(let i=1; i<= props.month.start_day; i++) {
            const date = props.month.days_in_previous_month - props.month.start_day +1;
            calendarBoxArray.push(<DayWrapper key={`P-${i}`} date={date} overFlow />)
        }
        for(let i=1; i<=props.month.days_in_month; i++) {
            calendarBoxArray.push(<DayWrapper key={`${props.month.id} - ${i}`} date={i} month={props.month} />)
        }
        for (let i=1; i <= 42 - props.month.days_in_month - props.month.start_day; i++) {
            calendarBoxArray.push(<DayWrapper key={`N-${i}`} date={i} overflow />)
        }
        return calendarBoxArray
    }
    return (
        <div className="weeks-wrapper">
            <DayTitle />
            <div className="weeks">
             { renderCalendarBox() }
            </div>
        </div>
    )
}