// import React ,{Components} from 'React';
//50:37
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
  }; //Consits of any data that the components need

  style = {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "serif",
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.style} className="badge bg-secondary m-2 "> */}
        <span style={this.style} className={this.getBadgeClasses}>
          {this.formatCount()}
        </span>
        <button
          style={this.style}
          className="btn-primary btn-sm"
          onClick={this.increment()}
        >
          Increment
        </button>
        <p style={{ fontWeight: "bold" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          incidunt maxime a repellendus quidem cumque voluptatum quam ad fugit
          atque dolores sint sit quia, consequuntur est magni, eveniet,
          assumenda ullam.
        </p>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //destructurig
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }

  increment() {
    this.state.count += 1;
  }
}

export default Counter;
