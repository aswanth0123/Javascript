import "./App.css";
import React, { Component } from "react";
import Todoapp from "./component/todo";
import List from "./component/list";

// function App() {
//   return (
//     <div className="App">
//       <h1>welcome to all</h1>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam repellat! Illo dignissimos aspernatur ipsum atque pariatur, officia vel necessitatibus veritatis labore tenetur maiores magni iure in asperiores temporibus exercitationem.</p>
//     </div>
//   );
// }
class App extends Component {
  state = {
    string: "sample",
    data: "sample data",
  };

  render() {
    return (
      <div className="App">
        <Todoapp mydata={this.state.string}/>
        <List />
      </div>
    );
  }
}
export default App;
