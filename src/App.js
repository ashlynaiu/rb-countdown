import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.updateClock = this.updateClock.bind(this);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
		this.initializeClock = this.initializeClock.bind(this);
		this.state = {
			clock: {
				seconds: '',
				minutes: '',
				hours: '',
				days: ''
			}
		};
	}

	updateClock(endtime) {
		var t = this.getTimeRemaining(endtime);
		return this.setState({
			clock: {
				seconds: ('0' + t.seconds).slice(-2),
				minutes: ('0' + t.minutes).slice(-2),
				hours: ('0' + t.hours).slice(-2),
				days: t.days
			}
		})
	}

	getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	initializeClock(endtime) {
		setTimeout(() => {
			this.updateClock(endtime);
		}, 1000);
	}

	render() {
		this.initializeClock('Nov 5 2017');
		const clock = {...this.state.clock};
		return (
			<div className="App">
				<h1>Retail Banking Launch</h1>
				<div className="clock">
					<div className="timeUnit">
						<span className="days">{clock.days}</span>
						<div className="smalltext">Days</div>
					</div>
					<div className="timeUnit">
						<span className="hours">{clock.hours}</span>
						<div className="smalltext">Hours</div>
					</div>
					<div className="timeUnit">
						<span className="minutes">{clock.minutes}</span>
						<div className="smalltext">Minutes</div>
					</div>
					<div className="timeUnit">
						<span className="seconds">{clock.seconds}</span>
						<div className="smalltext">Seconds</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
