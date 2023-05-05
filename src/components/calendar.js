import React, { Component } from "react";
import Header from "./calendar/header";
import Footer from "./calendar/footer";
import Weeks from "./calendar/weekwrapper";


export default class Calendar extends Component {
    constructor() {
        super();
        this.monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "Novermber",
            "December"
        ];

        this.now = this.calculateDateData()

        this.state ={
            month: {},
            monthData: [],
        };

        this.handleMonthChange = this.handleMonthChange.bind(this)
    }

    calculateDateData() {
        const now = new Date()
        const month = this.monthList[now.getMonth()]
        const year = now.getFullYear();
        return { month, year };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/month/get")
            .then(response => response.json())
            .then(data => this.setState({
                monthData: data,
                month: data.filter(month => month.name === this.now.month && month.year === this.now.year)[0]
            }));
    }

    handleMonthChange(direction) {
        const currentMonthIndex = this.monthList.indexOf(this.state.month.name)
        const newMonthName = this.monthList[direction === "next" ? currentMonthIndex +1 : currentMonthIndex - 1];
        const newMonthData = this.state.monthData.filter(month => month.name === newMonthName)[0];
        this.setState({ month: newMonthData });
    }

    render() {
        return(
            <div className="calendar-wrapper">
                    <h1 className="welcome">Welcome to My Calendar</h1>
                    <Header mn={this.state.month.name} cm={this.handleMonthChange} />
                    <Weeks month={this.state.month} />
                    <Footer cy={this.state.month.year} />
            </div>
        );
    }
}