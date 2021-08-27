import { createStore,combineReducers} from "redux";
import paltarReducer from "./paltarReducer";

import cardReducer from "./cardReducer";

const reducers=combineReducers({
  cardReducer,
  paltarReducer
})

const configureStore=()=>{
    return createStore(reducers)
}

export default configureStore