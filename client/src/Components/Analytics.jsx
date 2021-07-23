import React from "react";

const Analytics = () => {
  return (
    <React.Fragment>
      <div class="container my-4 ">
        <div class="row">
          <div class="col-lg-12 border my-5 bg-white text-dark">
            <p>
              <span class="material-icons ms-3 mt-3">visibility</span>{" "}
              <b class="ms-2 fs-4"> Views</b>
            </p>
            <p class="text-white my-5 text-center py-3 ">
              Graph will come here<b class="text-white">r nihil.</b>
            </p>
          </div>
        </div>
      </div>

      <div class="container parent">
        <div class="row  mb-5 ">
          <div
            class=" col-lg-5 boreder  bg-white text-dark hello mt-4 ms-5"
            id="left"
          >
            <p>
              <span class="material-icons  mt-3 ">watch_later</span>{" "}
              <b class="ms-2 fs-4"> Clicks</b>
            </p>
            <p class="text-dark fw-bolder fs-2 my-5 text-center ">85ctr</p>
          </div>
          <div
            class="col-lg-5 boreder  bg-white text-dark hello mt-4 ms-5"
            id="right"
          >
            <p>
              <span class="material-icons  mt-3">trending_up</span>
              <b class="ms-2 fs-4"> Time spent</b>
            </p>
            <p class="text-dark fw-bolder fs-2 my-5 text-center">75min</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Analytics;
