// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  updateTime = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    this.clearTimerInterval()
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
      timerInSeconds: 0,
    }))
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="stopwatch-container">
        <div className="container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="timer-display">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
