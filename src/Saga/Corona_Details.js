import { call, put, takeEvery } from "redux-saga/effects";
import { datasuccess, datafail } from "../Redux/actions/action";
import axios from "axios";
import * as types from "../Redux/actions/actiontype";

const getdata = async () => {
  return await axios({
    method: "GET",
    url: "https://api.covid19api.com/summary",
  });
};

function* handleGetdata(action) {
  console.log("saga ---->", action.payload);
  try {
    const datas = yield call(getdata);
    console.log(datas, "datas.......--->");
    yield put(datasuccess(datas.data));
  } catch (error) {
    yield put(datafail(error.datas));
  }
}
// handleGetdata()
// console.log(handleGetdata,"handleGetdata.....>")
// console.log(GET_DATA_REQUESTED,"GET_DATA_REQUESTED....")
function* watchdata() {
  yield takeEvery(types.GET_DATA_REQUESTED, handleGetdata);
}

export default watchdata;
