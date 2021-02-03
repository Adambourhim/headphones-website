import React, { Fragment, useState } from "react";
import Plus from "../Image/plus.svg";
function PlusStand(props) {
  const [plusOne, setPlusOne] = useState(false);
  const { title, disc, topp, leftt, divleft } = props;
  return (
    <Fragment>
      <div
        className="plus"
        style={{
          top: topp,
          left: leftt,
          bottom: -topp,
          flexDirection: divleft ? "row-reverse" : "row",
        }}
      >
        <img
          className="img2"
          onMouseMove={() => {
            setPlusOne(true);
          }}
          onMouseOut={() => {
            setPlusOne(false);
          }}
          src={Plus}
          alt="plus"
        />
        <div className="info2">
          {plusOne ? (
            <div className="box1">
              <h5>{title}</h5>
              <p>{disc}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default PlusStand;
