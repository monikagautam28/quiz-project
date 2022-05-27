import React, { Component } from 'react'
import Modal from "../common/Modal";

export default class Timer extends Component {
    constructor(props) {
       super(props);
       console.log(props)
    this.state = {
        minutes: 30,
        seconds: 0,
        modal:false
    }
    // console.log(this.props)
}

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
         
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        
        const { minutes, seconds } = this.state
      
        return (
            <div className='position-timer'>
                { minutes === 0 && seconds === 0
                    ?<h2>{window.alert("Time over")}</h2>
                    : <h4>Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
                }
     
                
            </div>

            
        )
    }

}
