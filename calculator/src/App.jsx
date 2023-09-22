import { useReducer } from "react";
import "./App.css";
import  DigitButtons  from "./DigitButtons";
import  OperationButtons  from "./OperationButtons";
import {reducer,Actions} from "./constants"




function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button
        className="span-two"
        onClick={() => dispatch({ type: Actions.CLEAR })}
      >
        AC
      </button>

      <button  onClick={() => dispatch({ type: Actions.DELETE_DIGIT })}>DEL</button>

      <OperationButtons operation="/" dispatch={dispatch} />

      <DigitButtons digit="1" dispatch={dispatch} />

      <DigitButtons digit="2" dispatch={dispatch} />

      <DigitButtons digit="3" dispatch={dispatch} />

      <OperationButtons operation="*" dispatch={dispatch} />

      <DigitButtons digit="4" dispatch={dispatch} />

      <DigitButtons digit="5" dispatch={dispatch} />

      <DigitButtons digit="6" dispatch={dispatch} />

      <OperationButtons operation="+" dispatch={dispatch} />

      <DigitButtons digit="7" dispatch={dispatch} />

      <DigitButtons digit="8" dispatch={dispatch} />

      <DigitButtons digit="9" dispatch={dispatch} />

      <OperationButtons operation="-" dispatch={dispatch} />

      <DigitButtons digit="." dispatch={dispatch} />

      <DigitButtons digit="0" dispatch={dispatch} />

      <button className="span-two" onClick={() => dispatch({ type: Actions.EVALUATE })}>=</button>
    </div>
  );
}

export default App;
