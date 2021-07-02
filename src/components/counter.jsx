// import React ,{Components} from 'React';
//1:16:45
import React, { Component } from "react"; //imrc

// export default class Counter extends Component {
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  }; //Consits of any data that the components need

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
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.style} className="badge bg-secondary m-2 "> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.increment({ id: 1 })}
          // Required when we pass id as argument
          style={this.style}
          className="btn-primary btn-sm"
        >
          Increment
        </button>

        {this.state.tags.length === 0 && "Please add tags!"}
        {/* In case when 2nd operand is non-boolean in js, it converts it to bool, here atlease 1 character evaluates to truth, thus returns the 2nd operand. Similarly, for true && "hi" && 1, answer will be 1  */}
        {this.renderTags()}

        <p style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          incidunt maxime a repellendus quidem cumque voluptatum quam ad fugit
          atque dolores sint sit quia, consequuntur est magni, eveniet,
          assumenda ullam.
        </p>
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
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //destructurig
    console.log(count);
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }

  increment = (product) => {
    // let x = this.state.count;
    // x += 1; //React is not aware that we are updating the state
    // this.state.count = x;
    // console.log(this.state.count);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
