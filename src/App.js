import React, { Component } from 'react';

class Timer extends Component {

  state = { 
    timer: 0, 
    minutes: 0,
    seconds: 0,
    lapMin: 0,
    lapSec: 0
  }

  increaseTime() {
    this.setState({ timer: this.state.timer + 1 })
  }

  timerInteval = () => {
    console.log("start")
    this.interval = setInterval(() => this.increaseTime(), 1000)
  }

  stopTimer = () => {
    console.log("stop")
    clearInterval(this.interval)
  }

  resetTimer = () => {
    console.log("reset")
    this.setState({ timer: 0 })
    clearInterval(this.interval)
  }

  lapTimer = () => {
    console.log("lap")
    this.setState({ lapMin: this.state.minutes })
    this.setState({ lapSec: this.state.seconds })
  }

  render() {
    return (
      <div style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>

        <h1>{this.state.time}</h1>

          <h1>{Math.floor(this.state.timer / 60)} : {(this.state.timer % 60 < 10) ? "0" +(this.state.timer % 60) : this.state.timer % 60 }</h1>

          <div>
            <button onClick={ this.timerInteval }>Start</button>
            <button onClick={ this.stopTimer }>Stop</button>
            <button onClick={ this.lapTimer }>Lap</button>
            <button onClick={ this.resetTimer }>Reset</button>
          </div>
          <h2>{ this.minutes }:{ this.seconds }</h2>
      </div>
    );
  }
}

export default Timer;


////////////////////////////////////////////////// ZACS SOLUTION

// import React, { Component } from 'react';

// class App extends Component {
// 	state = {
// 		time: 0,
// 		enabled: false,
// 		intervalId: null,
// 		laps: []
// 	}

// 	convertToTime = (time) => {
// 		let minutes = "0" + Math.floor(time/60);
// 		let seconds = "0" + time % 60;
// 		return minutes.substr(-2) + ':' + seconds.substr(-2);
// 	}

// 	startTime = () => {
// 		let id = setInterval(() => {
// 			this.setState({ time: this.state.time + 1 })
// 		}, 1000)

// 		this.setState({ enabled: true, intervalId: id });
// 	}

// 	stopTime = () => {
// 		clearInterval(this.state.intervalId);
// 		this.setState({ enabled: false })
// 	}

// 	reset = () => {
// 		clearInterval(this.state.intervalId);
// 		this.setState({ 
// 			time: 0,
// 			enabled: false,
// 			intervalId: null,
// 			laps: [] 
// 		})
// 	}

// 	lap = () => {
// 		let { time, laps } = this.state;
// 		this.setState({ 	: [...laps, time] })
// 		// console.log('lap button works')
// 	}

// 	render() {
// 		return (
// 			<div style={{ margin: '0 auto', width: '50%', textAlign: 'center' }}>
// 				<h1>Stop Watch</h1>
// 				<h1>{this.convertToTime(this.state.time)}</h1>
// 				<div>
// 					<button disabled={this.state.enabled} onClick={this.startTime}>Start</button>
// 					<button disabled={!this.state.enabled} onClick={this.stopTime}>Stop</button>
// 					<button onClick={this.reset}>Reset</button> 
// 					<button onClick={this.lap}>Lap</button>
// 				</div>
// 				<div>
// 					{this.state.laps.map((lap) => {
// 						return <p key={lap}>{this.convertToTime(lap)}</p>
// 					})}
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default App;