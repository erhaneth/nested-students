import React, {Component} from 'react'
import Student from './Student'

class Roster extends Component {
    render(){
        return (
            <>
            <div>
             <Student student={this.props.students[0]}/>
            </div>
            <div>
            <Student student={this.props.students[1]}/>
            </div>
            <div>
            <Student student={this.props.students[2]}/>
            </div>
            </>
        )
    }
}

export default Roster

// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
  