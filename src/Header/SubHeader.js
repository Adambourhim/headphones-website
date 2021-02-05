import React, { Fragment, useState } from "react";

function SubHeader() {
  const [text, setText] = useState("Silver");
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
          <a href="#" onClick={() => setText("Silver")}>
            <div
              className="p1"
              style={
                text === "Silver"
                  ? {
                      position: "relative",
                      width: "33px",
                      height: "33px",
                      backgroundColor: "#666666",
                      borderRadius: "50%",
                    }
                  : {}
              }
            >
              <div
                style={
                  text === "Silver"
                    ? {
                        transform: "translate(-7%, -6%)",
                        width: "27px",
                        height: "27px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }
                    : {}
                }
              >
                <div
                  style={
                    text === "Silver"
                      ? {
                          transform: "translate(-5%, -6%)",
                          width: "19px",
                          height: "19px",
                          backgroundColor: "#666666",
                          borderRadius: "50%",
                        }
                      : {}
                  }
                ></div>
              </div>
            </div>
          </a>
          <a href="#" className="divColor" onClick={() => setText("Orange")}>
            <div
              className="p2"
              style={
                text === "Orange"
                  ? {
                      position: "relative",
                      width: "33px",
                      height: "33px",
                      backgroundColor: "#feb554",
                      borderRadius: "50%",
                    }
                  : {}
              }
            >
              <div
                style={
                  text === "Orange"
                    ? {
                        transform: "translate(-7%, -6%)",
                        width: "27px",
                        height: "27px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }
                    : {}
                }
              >
                <div
                  style={
                    text === "Orange"
                      ? {
                          transform: "translate(-5%, -6%)",
                          width: "19px",
                          height: "19px",
                          backgroundColor: "#feb554",
                          borderRadius: "50%",
                        }
                      : {}
                  }
                ></div>
              </div>
            </div>
          </a>
          <a href="#" onClick={() => setText("Green")}>
            <div
              className="p3"
              style={
                text === "Green"
                  ? {
                      position: "relative",
                      width: "33px",
                      height: "33px",
                      backgroundColor: "#606651",
                      borderRadius: "50%",
                    }
                  : {}
              }
            >
              <div
                style={
                  text === "Green"
                    ? {
                        transform: "translate(-7%, -6%)",
                        width: "27px",
                        height: "27px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }
                    : {}
                }
              >
                <div
                  style={
                    text === "Green"
                      ? {
                          transform: "translate(-5%, -6%)",
                          width: "19px",
                          height: "19px",
                          backgroundColor: "#606651",
                          borderRadius: "50%",
                        }
                      : {}
                  }
                ></div>
              </div>
            </div>
          </a>
          <a href="#" onClick={() => setText("Brouwn")}>
            <div
              className="p4"
              style={
                text === "Brouwn"
                  ? {
                      position: "relative",
                      width: "33px",
                      height: "33px",
                      backgroundColor: "#edab7b",
                      borderRadius: "50%",
                    }
                  : {}
              }
            >
              <div
                style={
                  text === "Brouwn"
                    ? {
                        transform: "translate(-7%, -6%)",
                        width: "27px",
                        height: "27px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }
                    : {}
                }
              >
                <div
                  style={
                    text === "Brouwn"
                      ? {
                          transform: "translate(-5%, -6%)",
                          width: "19px",
                          height: "19px",
                          backgroundColor: "#edab7b",
                          borderRadius: "50%",
                        }
                      : {}
                  }
                ></div>
              </div>
            </div>
          </a>
          <a href="#" onClick={() => setText("Pink")}>
            <div
              className="p5"
              style={
                text === "Pink"
                  ? {
                      position: "relative",
                      width: "33px",
                      height: "33px",
                      backgroundColor: "#c56a72",
                      borderRadius: "50%",
                    }
                  : {}
              }
            >
              <div
                style={
                  text === "Pink"
                    ? {
                        transform: "translate(-7%, -6%)",
                        width: "27px",
                        height: "27px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }
                    : {}
                }
              >
                <div
                  style={
                    text === "Pink"
                      ? {
                          transform: "translate(-5%, -6%)",
                          width: "19px",
                          height: "19px",
                          backgroundColor: "#c56a72",
                          borderRadius: "50%",
                        }
                      : {}
                  }
                ></div>
              </div>
            </div>
          </a>
        </div>
        <div className="box-3">
          <p className="textID">{text}</p>
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
