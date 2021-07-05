import React, { Component } from "react";
import Counter from "./counter";

// Control component doesn't have it's own local state, it receives all data via props and raises events whenever data needs to be changed, thus it is entirely controlled by its parent

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4, title: "Gaming" },
      { id: 2, value: 0, title: "Singing" },
      { id: 3, value: 2, title: "Dancing" },
      { id: 4, value: 1, title: "Swimming" },
    ],
  };

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
    console.log(this.state.counters[index]);
  };

  render() {
    return (
      <div>
        {/* <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter> */}

        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // selected
            // title={counter.title}
            // id={counter.id}
            // value={counter.value}
            counter={counter}
          >
            {/* Here, we cannot access the state of component, props are READ-ONLY */}

            {<p style={{ margin: "15px 10px" }}>Nothing bro</p>}
            {/* <h4>Title #{counter.id}</h4> */}
            {/* {this.display()} */}
          </Counter>
          //   selected is by default true
        ))}
      </div>
    );
  }

  display() {
    return (
      <div>
        {this.state.title.map((t) => {
          <h4 key={t}>t</h4>;
        })}
      </div>
    );
  }
}

export default Counters;
