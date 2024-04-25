import React, { Component } from 'react'

export default class List extends Component {
    state={
        data : [
            {
                id:1,
                name:"anu",
                age:22
            },
            {
                id:2,
                name:"appu",
                age:24
            },
        ]
    }
  render() {
    return (
      <div>
        <table className='table'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
            </tr>
            {this.state.data.map((value,index)=>(
                <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                </tr>
            ))}
        </table>
      </div>
    )
  }
}
