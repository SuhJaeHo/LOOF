import { combineReducers } from "redux";

import region from "./region";
import address from "./address";

const rootReducer = combineReducers({
    region,
    address,
})

export default rootReducer;