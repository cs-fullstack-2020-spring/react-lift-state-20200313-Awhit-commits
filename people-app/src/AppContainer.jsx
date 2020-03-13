import React, { Component } from 'react'
import People from './People';

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            total_ages :0,
        }
        
    }
    updateAge=()=>{
        this.setState(
            {total_ages:this.state.total_ages+=1}
        )
    }
    render() {
        return (
            <div>
            <h1>This is the total ages {this.state.total_ages}</h1>
                <People name = "Andrew" age  = "21" updateAgeByOne ={this.updateAge}></People>
                 <People name="Donovan" age ="19" updateAgeByOne ={this.updateAge}/>
            </div>
        )
    }
}
