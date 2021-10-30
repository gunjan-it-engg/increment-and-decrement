import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <div className="Container">
          <h1>increment and descrement</h1>
          <h4>Using react and redux</h4>
          <div className="quantity">
            <a
              className="quantity_minus"
              title="DESCREMENT"
              onClick={() => dispatch(decNumber(2))}
            >
              <button>
                <span>-</span>
              </button>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity_input"
              value={myState}
            />
            <a
              className="quantity_plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <button>
                <span>+</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
