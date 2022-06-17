
import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Getdata } from "../Redux/Actions/Action";
import Table from "./Table";
function Corona_Details({ getdataAction, data }) {
  console.log("data----->", data);
  let res = data.Countries;

  useEffect(() => {
    getdataAction();

  }, []);





  return (

    <>
      {/* <div className="jumbotron">
        <select> */}
          {/* When you use array function, make sure you check if array length is > 0 */}
          {/* {res && res.length > 0 && res.map((e) => {
            return (
              <option>{e.Country}</option>
            )
          })}
        </select>


        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div> */}
      <div>
        <Table data={res} />
      </div>

    </>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    data: state.CorReducer.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    getdataAction: () => dispatch(Getdata()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Corona_Details);
