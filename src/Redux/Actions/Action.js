import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  
} from "./actiontype";

export const Getdata = () => {
  console.log("action calll");
  return {
    type: GET_DATA_REQUESTED,
  };
};

export const datasuccess = (data) => {
  console.log("action sucess--->", data);
  return {
    type: GET_DATA_SUCCESS,
    payload: data,
  };
};

export const datafail = (error) => {
  return {
    type: GET_DATA_FAILED,
    payload: error,
  };
};

// export const Corona = (id) => {
//   return {
//     type: GET_CORONA_REQUESTED,
//     payload: id,
//   };
// };

// export const Corona_success = (data) => {
//  return {
//     type: GET_CORONA_SUCCESS,
//     payload: data,
//   };
// };

// Corona_success()
// export const Corona_fail = (error) => {
//   return {
//     type: GET_CORONA_FAILED,
//     payload: error,
//   };
// };
