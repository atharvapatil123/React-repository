import React, { Component } from "react";
import Counter from "./counter";

// Control component doesn't have it's own local state, it receives all data via props and raises events whenever data needs to be changed, thus it is entirely controlled by its parent

class Counters extends Component {
  // In lifting the state up, we want the counters list and the functions to be shared by multiple components or children, thus we pu them in the root parent i.e App.js and acces using props

  render() {
    console.log("Counters - rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        {/* <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter> */}

        <button
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {/* {this.props.counters.map((counter) => ( */}
        {counters.map((counter) => (
          <Counter //HERE WHATEVER IS DEFINED ARE PROPS
            key={counter.id}
            // onDelete={this.props.onDelete}
            onDelete={onDelete}
            // onIncrement={this.props.onIncrement}
            onIncrement={onIncrement}
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

  // display() {
  //   return (
  //     <div>
  //       {this.state.title.map((t) => {
  //         <h4 key={t}>t</h4>;
  //       })}
  //     </div>
  //   );
  // }
}

export default Counters;
