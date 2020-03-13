import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age
    };
  }
    // componentWillMount() {let age_int = parseInt(this.state.age);
    // age_int += 1;
    // this.setState({age : age_int});
    // }
    addOne =() =>{
        let age_int = parseInt(this.state.age);
        age_int +=1;

        this.setState(
            
            {
            age:age_int
        })
        this.props.updateAgeByOne();
    }
  
  render() {
   
    return (
      <div>
        <h2>My name is {this.state.name}</h2>
        <h2>My age is {this.state.age}</h2>
        <button className="ageInc" onClick={this.addOne}>Increase Age</button>

      </div>
    );
  }
}

export default People;
