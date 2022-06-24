import { all } from "@redux-saga/core/effects";
import Corona_detail from "./corona_Details";


export default function* rootsaga() {
    yield all([
        Corona_detail()
    ]);
}
