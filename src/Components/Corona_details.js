import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import "../App.css"
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



  const [selected, setSelected] = useState("");
  const [TotalConfirmed, setTotalConfirmed] = useState("")

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (

    <>
      <div className="jumbotron">
      <span>Select Country - </span>
        {/* When you use array function, make sure you check if array length is > 0 */}
        <select value={selected} onChange={handleChange}>
          {res && res.length > 0 && res.map((e) => {
            return (
              <>
                <option key={e.Country} value={e.Country}>{e.Country}</option>
              </>

            )
          })}
        </select>


        <hr className="my-4" />
        <div className="card container">
          <div className="card-header text-left text-danger ">
            <b className='blink_me'><FontAwesomeIcon icon={faDotCircle} /></b> Live
          </div>

          <div class="container">
            <div class="row">




              <div class="col-sm">
                {res && res.length > 0 && res.map((e, i) => {
                  {/* console.log(i, "index") */}
                  if (selected == e.Country) {
                    return (
                      <>
                        <div>
                          {
                            e.TotalConfirmed

                          }
                        </div>
                      </>
                    )

                  }else if (selected == "" & i == 0){
                    return (
                      <>
                        {e.TotalConfirmed}
                      </>
                    )
                  }
                  
                })}


                  {console.log(selected,"selected")}

                <div className="bg-danger text-white">Confirmed</div>    </div>


              <div class="col-sm">
                {res && res.length > 0 && res.map((e, i) => {
                  {/* console.log(i, "index") */}
                  if (selected == e.Country) {
                    return (
                      <>
                        <div>
                          {
                            e.TotalDeaths

                          }
                        </div>
                      </>
                    )

                  }else if (selected == "" & i == 0){
                    return (
                      <>
                        {e.TotalDeaths}
                      </>
                    )
                  }
                })}




                <div className="bg-dark text-white ">Death</div>    </div>





            </div>
          </div>
          <div className="card-footer text-muted">
            Live Details
          </div>
        </div>
      </div>
      <div>
        <Table data={res} />
      </div>

    </>
  );
}
const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    data: state.CorReducer.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch");
  return {
    getdataAction: () => dispatch(Getdata()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Corona_Details);
