import { Component } from 'react';

export class ClassTrafficLight extends Component {
  state = {
    colorIndex: 0,
  };

  handleChangeColor = () => {
    this.setState({
      colorIndex: this.state.colorIndex === 2 ? 0 : this.state.colorIndex + 1,
    });
  };

  render() {
    const colors = ['red', 'yellow', 'green'];
    const currentColor = colors[this.state.colorIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${currentColor === 'red' ? 'red' : 'black'}`}
          ></div>
          <div
            className={`circle ${
              currentColor === 'yellow' ? 'yellow' : 'black'
            }`}
          ></div>
          <div
            className={`circle ${currentColor === 'green' ? 'green' : 'black'}`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.handleChangeColor}>
          Next State
        </button>
      </div>
    );
  }
}
