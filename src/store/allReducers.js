import { combineReducers } from "redux";
import categoryReducer from "../redux/categoryReducer/reducer";

const AllReducers = combineReducers({
  categoryReducer,
});

export default AllReducers;
