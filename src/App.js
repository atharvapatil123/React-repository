import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// LIFECYCLE HOOKS
// Mounting phase: Constructor, Render, ComponentDidHook
// Updating phase: Render, ComponentDidUpdate
// UnMounting phase: ComponentWillUnmount

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, title: "Gaming" },
      { id: 2, value: 0, title: "Singing" },
      { id: 3, value: 2, title: "Dancing" },
      { id: 4, value: 1, title: "Swimming" },
    ],
  };

  constructor() {
    super();
    console.log("App- Constructor"); //Must pass props as a parameter
    // this.state = this.props.something, setting state to props
    // Cannot call setState(), as it can only be called when it is rendered
  }

  componentDidMount() {
    // After component is rendered, it's called
    // Best place for AJAX calls
    console.log("App- Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    // When key :value pair is same write as below
    this.setState({ counters });
    console.log("Event handler called", counterId);
  };
  //   Handle event, raised by onDelete in counter

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clone the counters array as it is
    //After cloning, we actually access the state counters array, so it's value actually gets updated, which is a bad practice
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    //clone the counter passed as argument, and store it our new counters array, thus avoids the problem
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[index]);
    // let counters = [];
    // // console.log(counter.id);
    // for (let c in this.state.counters) {
    //   if (c == counter.id) {
    //     console.log(c);
    //     this.setState({
    //       counters: [{ value: this.state.counters.value + 1 }],
    //     });
    //   }
    //   // counters.push(c);
    // }
    // const counters = this.state.counters;
    // this.setState({ counters });
  };
  render() {
    console.log("App- rendered");
    // When a component is rendered, all it's children are also renderd recursively

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
