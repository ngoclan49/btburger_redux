import { combineReducers } from "@reduxjs/toolkit";
import {BurgerReducer} from "../reducers/BurgerReducer";

//store tổng ứng dựng
export const rootReducer = combineReducers ({
    //Nơi chứa reducer (store con)
    BurgerReducer
})