import { appReducer, initialState } from "./reducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(appReducer, initialState);
