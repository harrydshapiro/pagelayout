import displayDefaults from "../displayDefaults"
import React, { PureComponent } from 'react'
import styleChoices from "../styleChoices"
import Child from "./child"
import $ from "jquery"
import htmlPretty from "pretty"

class Parent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, displayDefaults.parentDefaults, {
      childCount: 3,
      id: props.id,
    });
    this.selectHandler = this.selectHandler.bind(this)
    this.updateChildCount = this.updateChildCount.bind(this)
  }

  selectHandler(event) {
    let value = event.target.value;
    let name = event.target.name;
    let stateObject = {};
    stateObject[name] = value;
    this.setState(stateObject);
  }

  updateChildCount(event) {
    const direction = event.target.dataset.countDirection;
    const current = this.state.childCount;
    const newCount = direction === 'up' ? current + 1 : Math.max(current - 1, 1);
    this.setState({
      childCount: newCount,
    })
  }

  render() {
    const parentStyle = Object.assign({}, this.state);
    delete parentStyle.childCount
    return (
      <div className="parent-wrapper" id={this.state.id}>
        <div className="parent" style={parentStyle}>
          {new Array(this.state.childCount).fill('').map(arg =>
            <Child />
          )}
        </div>

        <div className="parent-controls">
          <div className="child-buttons">
            <button onClick={this.updateChildCount} className="up button" data-count-direction="up">Add Child</button>
            <button onClick={this.updateChildCount} className="down button" data-count-direction="down">Remove Child</button>
          </div>

          <form>
            {Object.entries(styleChoices).map(([prop, { name, options }], index) =>
              <div className="input-wrapper" key={index}>
                <label >
                  <p className="dropdown-label">{name}:</p>
                  <select name={prop} onChange={this.selectHandler} value={this.state[prop]}>
                    {options.map((choice, index) =>
                      <option key={index} value={choice}>{choice}</option>
                    )}
                  </select>
                </label>
              </div>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default Parent