import React from "react";
import LeftPanel from "./DashboardComponents/LeftPanel";


const Analytics = () => {
  return (
    <React.Fragment>
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <LeftPanel/>
                </div>
                <div className="col-lg-10 right">
                <div className="container">
      <div >
      <div className="row">
            <div className="col-lg-12 border my-5 bg-white text-dark">
                <p><span className="material-icons ms-3 mt-3">
                        visibility
                    </span> <b className="ms-2 fs-4"> Views</b></p>
                <p className="text-dark my-5 text-center ">Graph will come here<b className="text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cum repellat non facere assumenda explicabo quia, tempora perferendis reiciendis veritatis odio excepturi nisi, ex pariatur quaerat officia in expedita dolores, placeat molestiae iure voluptates labore? In et voluptatem neque at voluptatibus magni, exercitationem dolorum, iusto aut, provident ducimus laborum suscipit consequatur animi repellendus. Nulla, dolor dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet veniam esse voluptatum soluta quas magnam alias impedit iure nemo, ducimus suscipit qui tempora praesentium culpa itaque reprehenderit blanditiis accusantium quidem consequuntur laborum sit officia laudantium unde. Obcaecati libero unde officia at ad necessitatibus tempora id facere temporibus ab distinctio harum reprehenderit atque, sint ratione debitis aspernatur vero nostrum eos. Nemo in repellendus saepe quidem pariatur nihil.</b>
                </p>
            </div>
        </div>
    </div>
    <div className="container parent">
        <div className="row  mb-5 ">
            <div className=" col-lg-6 boreder  bg-white text-dark hello mt-4" id="left">
                <p><span className="material-icons ms-3 mt-3 ">
                        watch_later
                    </span> <b className="ms-2 fs-4"> Click</b></p>
                <p className="text-dark fw-bolder fs-2 my-5 ms-4 ">85ctr</p>
            </div>
            <div className="col-lg-6 boreder  bg-white text-dark hello mt-4" id="right">
                <p><span className="material-icons ms-3 mt-3">
                        trending_up
                    </span><b className="ms-2 fs-4"> Time spent</b></p>
                <p className="text-dark fw-bolder fs-2 my-5 ms-4">75min</p>
            </div>
        </div>
    </div>
      </div>

                </div>
            </div>
        </div>

    </React.Fragment>
  );
};

export default Analytics;
