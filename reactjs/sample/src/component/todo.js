import React, { Component } from 'react'


class Todoapp extends Component {
  state = {
    inputvalue : "",
    inputvalue1 : ""
  }
  clickchng= event =>{
      this.setState({
        [event.target.name] : event.target.value,

      })
  }
  clickfun=()=>{
    console.log(this.state)

  }
  render() {
    return (
      <div>
        <h1>Todo app</h1>
        <h2>{this.props.mydata}</h2>
        {this.state.inputvalue}
        <form action="">
          <input type="text" name="inputvalue" value={this.state.inputvalue} placeholder='enter a data' id="" onChange={this.clickchng}/>
          <input type="text" name="inputvalue1" value={this.state.inputvalue1} placeholder='enter a data' id="" onChange={this.clickchng}/>

          <button type="button" onClick={this.clickfun} >click</button>
        </form>
      </div>
    )
  }
}
export default Todoapp