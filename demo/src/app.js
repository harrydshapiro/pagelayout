import React, { useState, useEffect } from "react";
import Parent from "./components/parent"

function App(props) {
  const [parentCount, updateParentCount] = useState(1);
  const parentCountClickHandler = (event) => {
    const direction = event.target.dataset.countDirection;
    const newCount = direction === 'up' ? parentCount + 1 : Math.max(parentCount - 1, 1);
    updateParentCount(newCount);
  }
  return (
    <React.Fragment>
      <div id='app-controls'>
        <div className="parent-buttons">
          <button onClick={parentCountClickHandler} className="up button" data-count-direction="up">Add Parent</button>
          <button onClick={parentCountClickHandler} className="down button" data-count-direction="down">Remove Parent</button>
        </div>
      </div>
      {new Array(parentCount).fill('').map((arg, index) => <Parent key={index} id={`#parentId_${index}`} />)}
    </React.Fragment>
  );
}

export default App;
