import React, {Component} from 'react'


class Score extends Component {
    render(){
        return (
            <>
            <h1>Score</h1>
            <p>Grade:{this.props.score}</p>
            <p>Date:{this.props.date}</p>
            </>
        )
    }
}

export default Score