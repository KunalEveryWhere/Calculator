import React, { Component } from "react";
import "../../public/style.css";

class CalculatorFrame extends Component {
  state = {
    incre: 0,
    string: "",
    value: 0
  };
  render() {
    return (
      <React.Fragment>
        {this.label()}
        {this.calculator_container()}
      </React.Fragment>
    );
  }
  calculator_body() {
    let element;
    element = (
      <React.Fragment>
        <div className="calc-body">
          {this.calculator_screen()}
          {this.calculator_buttons()}
        </div>
      </React.Fragment>
    );
    return element;
  }
  label() {
    let element = (
      <React.Fragment>
        <div class="label">Calculator 2.0</div>
        <div class="footer">
          <a href="https://kunaleverywhere.com" target="_blank">
            kunaleverywhere <sup>©</sup>
          </a>
          <div class="righter">All Rights Reserved ®</div>
        </div>
      </React.Fragment>
    );
    return element;
  }
  calculator_container() {
    let element;
    element = (
      <React.Fragment>
        <div className="container centerized">{this.calculator_body()}</div>
      </React.Fragment>
    );

    return element;
  }
  calculator_screen() {
    let element;
    element = (
      <div className="calc-screen">
        {this.calculator_operation()}
        {this.calculator_typed()}
      </div>
    );
    return element;
  }
  calculator_operation() {
    let element;
    element = <div className="calc-operation">{this.state.string}</div>;
    return element;
  }
  calculator_typed() {
    let element;
    element = (
      <div className="calc-typed">
        {this.state.value}
        <span className="blinking">_</span>
      </div>
    );
    return element;
  }
  calculator_buttons() {
    let element;
    element = (
      <React.Fragment>
        <div className="calc-button-row">
          <div className="button c" onClick={() => this.click_Clear()}>
            C
          </div>
          <div className="button l" onClick={() => this.click_Not_Equals()}>
            <div class="tooltip">
              ≠<span class="tooltiptext">Function not available</span>
            </div>
          </div>
          <div className="button l" onClick={() => this.click_Button("%")}>
            %
          </div>
          <div className="button l" onClick={() => this.click_Button("/")}>
            /
          </div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => this.click_Button(7)}>
            7
          </div>
          <div className="button" onClick={() => this.click_Button(8)}>
            8
          </div>
          <div className="button" onClick={() => this.click_Button(9)}>
            9
          </div>
          <div className="button l" onClick={() => this.click_Button("*")}>
            x
          </div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => this.click_Button(4)}>
            4
          </div>
          <div className="button" onClick={() => this.click_Button(5)}>
            5
          </div>
          <div className="button" onClick={() => this.click_Button(6)}>
            6
          </div>
          <div className="button l" onClick={() => this.click_Button("-")}>
            −
          </div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => this.click_Button(1)}>
            1
          </div>
          <div className="button" onClick={() => this.click_Button(2)}>
            2
          </div>
          <div className="button" onClick={() => this.click_Button(3)}>
            3
          </div>
          <div className="button l" onClick={() => this.click_Button("+")}>
            +
          </div>
        </div>
        <div className="calc-button-row">
          <div className="button" onClick={() => this.click_Button(".")}>
            .
          </div>
          <div className="button" onClick={() => this.click_Button(0)}>
            0
          </div>
          <div className="button c" onClick={() => this.click_Backspace()}>
            ←
          </div>
          <div className="button e" onClick={() => this.click_Equals()}>
            =
          </div>
        </div>
      </React.Fragment>
    );
    return element;
  }
  click_Button = c => {
    if (this.state.string.length < 19) {
      this.state.string = this.state.string + c;
      this.setState({ string: this.state.string });
      console.log("string: ", this.state.string);
    } else {
      console.log("value exceeds capacity.");
    }
  };
  click_Equals = () => {
    this.state.value = eval(this.state.string);
    if (Number.isInteger(this.state.value)) {
      if (this.state.value > 999999999 || this.state.value < -999999998) {
        this.state.value = "Error.";
      }
    } else {
      this.state.value = this.state.value.toFixed(4);
      if (this.state.value.toString().length > 9) {
        this.state.value = this.state.value.toString().substring(0, 8);
      }
    }
    this.setState({ value: this.state.value });
    console.log("resultant value: ", { value: this.state.value });
  };
  click_Backspace = () => {
    let str = this.state.string;
    str = str.slice(0, -1);
    this.setState({ string: str });
    console.log("backspace. string:", { string: str });
  };
  click_Clear = () => {
    this.setState({ string: "" });
    this.setState({ value: 0 });
  };
  click_Not_Equals = () => {
    console.log("Button not assigned to a specific function.");
  };
}

export default CalculatorFrame;
