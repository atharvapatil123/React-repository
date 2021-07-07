// import React ,{Components} from 'React';
//1:16:45
import React, { Component } from "react"; //imrc

// export default class Counter extends Component {
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // new state or new props or make AJAX requests
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter Unmount");
  }

  // state = {
  //   // count: 0,
  //   count: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3", "tag4"],
  // };
  //Consits of any data that is private to a particular component components need

  style = {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "serif",
  };

  // constructor() {
  //   super();
  // this.increment = this.increment.bind(this); //Binds the current object to the bound function
  // }

  render() {
    console.log("Counters - rendered");
    // console.log("props", this.props);
    // Every react component has a property called props, which is a plain js object. It includes all attributes we set for components. Example: In our case, for Counters, value and selected are attributes for props object, key won't be as it's special unique identifier.

    return (
      <div>
        <div
          style={{
            border: "5px solid pink",
            margin: "5px",
            borderRadius: "15px",
          }}
        >
          {/* <img src={this.state.imageUrl} alt="" /> */}
          {/* <span style={this.style} className="badge bg-secondary m-2 "> */}

          <h4
            style={{
              marginTop: 10,
              marginLeft: 10,
              color: "purple",
              fontFamily: "cursive",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            {this.props.counter.title}
          </h4>

          {this.props.children}

          <span style={this.style} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            // onClick={() => this.increment({ id: 1 })}
            // Required when we pass id as argument
            style={this.style}
            className="btn-primary btn-sm"
          >
            Increment1
          </button>

          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>

          {/* {this.state.tags.length === 0 && "Please add tags!"} */}
          {/* In case when 2nd operand is non-boolean in js, it converts it to bool, here atlease 1 character evaluates to truth, thus returns the 2nd operand. Similarly, for true && "hi" && 1, answer will be 1  */}
          {/* {this.renderTags()} */}

          <p style={{ fontWeight: "bold", marginLeft: 10 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            incidunt maxime a repellendus quidem cumque voluptatum quam ad fugit
            atque dolores sint sit quia, consequuntur est magni, eveniet,
            assumenda ullam.
          </p>
        </div>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
        {/* Each child in an array or iterator should have a unique "key", so when child changes, it helps react to identify what changes to make in real DOM */}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    // classes += this.state.count === 0 ? "warning" : "secondary";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    // const { count } = this.state; //destructurig
    const count = this.props.counter.value;
    // console.log(count);
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }

  // increment = (product) => {
  //   // let x = this.state.count;
  //   // x += 1; //React is not aware that we are updating the state
  //   // this.state.count = x;
  //   // console.log(this.state.count);
  //   console.log(product);
  //   // this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.props.counter.value + 1 });
  // };
}

export default Counter;
