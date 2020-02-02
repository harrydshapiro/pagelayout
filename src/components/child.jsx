import displayDefaults from "../displayDefaults"
import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function child() {
  const [childStyle, updateStyle] = useState(displayDefaults.childDefaults);

  const [heightWidthReadout, updateReadout] = useState({
    height: null,
    width: null
  })

  const [childId] = useState((Math.random() + '_childId').slice(2));

  useEffect(() => {
    const height = $(`#${childId}`).height();
    const width = $(`#${childId}`).width();
    updateReadout({ height, width })
  }, [childStyle, window.width, window.height])

  useEffect(() => {
    const height = $(`#${childId}`).height();
    const width = $(`#${childId}`).width();
    updateReadout({ height, width })
  }, [])

  const inputHandler = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    const updateObj = {};
    updateObj[prop] = value;
    updateStyle(Object.assign({}, childStyle, updateObj))
  }

  return (
    <div id={childId} className="child-wrapper" style={childStyle}>
      <div className="child-inner">
        <div className="dimensions-readout">
          <p className="width">Width: <span>{heightWidthReadout.width}px</span></p>
          <p className="height">Height: <span>{heightWidthReadout.height}px</span></p>
        </div>
        <div className="form-wrapper">
          <form className="child-form">
            {Object.entries(displayDefaults.childDefaults).map(([prop, value], index) =>
              <div className="input-wrapper" key={index}>
                <label >
                  <p className="input-label">{prop}:</p>
                  <input type="text" name={prop} onChange={inputHandler} value={childStyle[prop]}>
                  </input>
                </label>
              </div>)}
          </form>
        </div>
      </div>
    </div>
  )
}
