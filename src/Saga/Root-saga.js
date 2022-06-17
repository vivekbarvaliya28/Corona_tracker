import { all } from "@redux-saga/core/effects";
import Corona_detail from "../Saga/Corona_Details";


export default function* rootsaga() {
    yield all([
        Corona_detail()
    ]);
  }
  