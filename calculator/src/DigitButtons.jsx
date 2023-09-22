import {Actions} from "./constants"
import PropTypes from "prop-types";
function DigitButtons({dispatch,digit}){
   return <button onClick={() => dispatch({type:Actions.ADD_DIGIT, payload:{digit}})}>
      {digit}
   </button>
}

DigitButtons.propTypes = {
   digit:PropTypes.string.isRequired,
   dispatch: PropTypes.func.isRequired,
}

export default DigitButtons;