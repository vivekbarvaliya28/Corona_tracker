import{
    GET_DATA_REQUESTED,GET_DATA_SUCCESS,GET_DATA_FAILED,   GET_CORONA_REQUESTED,GET_CORONA_SUCCESS,GET_CORONA_FAILED
   } from "../Actions/Actiontype"

   const initialstate = {
    items: [],
    loading: false,
    error: null,  
  };
   
const CorReducer = (state = initialstate, action) => {
  console.log("reducert --->",action,action.payload);
    if (action.type === GET_DATA_REQUESTED) {
      return {
        ...state,
        loading: true,
      };
    }
  
    if (action.type === GET_DATA_SUCCESS) {
  
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
  
    if (action.type === GET_DATA_FAILED) {
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    }
  
      // if (action.type === GET_CORONA_REQUESTED) {
      //   return {
      //     ...state,
      //     waiting: true,
      //   };
      // }
    
      // if (action.type === GET_CORONA_SUCCESS) {
      //   // console.log("in the reducer file product data----",action.payload);
      //   return {
      //     ...state,
      //     Corona_detail: [action.payload],
      //     waiting: false,
      //   };
      // }
      // if (action.type === GET_CORONA_FAILED) {
      //   return {
      //     ...state,
      //     waiting: false,
      //     error: action.message,
      //   };
      // }
      
      else {
      return state;
    }
  };
  
  export default CorReducer;
  