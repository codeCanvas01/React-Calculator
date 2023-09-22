import {Actions} from "./constants"
import PropTypes from "prop-types";
function OperationButtons({dispatch,operation}){
   return <button onClick={()=> dispatch({type:Actions.CHOOSE_OPERATION, payload:{operation}})}>
      {operation}
   </button>
}

OperationButtons.propTypes = {
    operation:PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default OperationButtons;