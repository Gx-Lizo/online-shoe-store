import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/features/userSlice";

 const  store = configureStore({
    reducer:{userReducer}
  });
  
export default store;