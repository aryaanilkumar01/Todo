import { configureStore } from "@reduxjs/toolkit";
import todo from '../Redux/todo'
export const store =configureStore({
         reducer:{
            todo
         }
})