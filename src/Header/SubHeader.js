import React, { Fragment } from "react";

function SubHeader() {
  return (
    <Fragment>
      <div className="container-2">
        <div className="box-1">
          <p>QuietComfort 35 wireless headphones II</p>
        </div>
        <div>
          <p>Select your color:</p>
        </div>
        <div className="box-2">
          <a href="#">
            <p className="p1"></p>
          </a>
          <a href="#">
            <p className="p2"></p>
          </a>
          <a href="#">
            <p className="p3"></p>
          </a>
          <a href="#">
            <p className="p4"></p>
          </a>
          <a href="#">
            <p className="p5"></p>
          </a>
        </div>
        <div className="box-3">
          <p>silver</p>
        </div>
        <div className="box-4">
          <p>$229.94</p>
          <button>Buy Now</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SubHeader;
