import { legacy_createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import MyReducer from "./Reducer";

export const MyStore=legacy_createStore(MyReducer,applyMiddleware(logger))
